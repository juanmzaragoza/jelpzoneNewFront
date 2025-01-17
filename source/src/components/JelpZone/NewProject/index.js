import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import SweetAlert from 'react-bootstrap-sweetalert';
import Dropzone from 'react-dropzone';
import OwlCarousel from 'react-owl-carousel';

import ContainerHeader from 'components/ContainerHeader';
import ProductItem from "app/routes/components/routes/carousel/product/ProductItem";

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';

 import CircularProgress from '@material-ui/core/CircularProgress';



import IntlMessages from 'util/IntlMessages';

import {
  createNewProject,
  clearNewProjectForm as clearForm
} from 'actions/Project';

class NewProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
      title: '',
      description: '',
      privacy: false,
      location: undefined,
      address: '',
      country: '',
      city: '',
    }
  }

  componentWillMount = () => {
    this.props.clearForm();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.props.createNewProject){
      this.props.createNewProject(this.state);
    }
  }

  onConfirmSuccessCreated = () => {
    this.props.history.push('/app/project');
  }

  onDropImage = (files) => {
    this.setState({
      images: files
    });
  }

  renderForm = () => {

    const {
      showMessage,
      loading,
      errorMessage
    } = this.props;

    return (
      <form action="" className="jr-card"  onSubmit={this.handleSubmit}>

        <div className="row">
          <div className="col-md-12 col-sm-6 text-center">
            <div className="dropzone">
              <Dropzone onDrop={this.onDropImage.bind(this)}>
                <p><IntlMessages id="appModule.newProject.upload.image.message"/></p>
              </Dropzone>

              {this.state.images.length > 0 ? 
                <div className="animated slideInUpTiny animation-duration-3">
                  <div className="row mb-md-4">
                    <div>
                      <h2>Uploading {this.state.images.length} files...</h2>
                      <OwlCarousel className="owl-theme owl-app-frame">
                        {this.state.images.map((file,index) => <ProductItem key={index} product={{image: file.preview}} /> )}
                      </OwlCarousel>
                    </div> 
                  </div>
                </div>
                : 
                null
              }
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12">
            <TextField
              id="title"
              label={<IntlMessages id="appModule.newProject.title"/>}
              margin="normal"
              className="mt-0 mb-2"
              onChange={(event) => this.setState({title: event.target.value})}
              fullWidth
              value={this.state.title}
              defaultValue={this.props.title}
            />
          </div>
          <div className="col-md-6 col-12">
            <TextField
              id="description"
              label={<IntlMessages id="appModule.newProject.description"/>}
              margin="normal"
              className="mt-0 mb-2"
              onChange={(event) => this.setState({description: event.target.value})}
              fullWidth
              value={this.state.description}
              defaultValue={this.props.description}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12">
            <TextField
              id="address"
              label={<IntlMessages id="appModule.address"/>}
              margin="normal"
              className="mt-0 mb-2"
              onChange={(event) => this.setState({address: event.target.value})}
              fullWidth
              value={this.state.address}
              defaultValue={this.props.address}
            />
          </div>

          <div className="col-md-6 col-12">
            <TextField
              id="location"
              label={<IntlMessages id="appModule.newProject.location"/>}
              margin="normal"
              className="mt-0 mb-2"
              onChange={(event) => this.setState({location: event.target.value})}
              fullWidth
              value={this.state.location}
              defaultValue={this.props.location}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12">
            <TextField
              id="country"
              label={<IntlMessages id="appModule.country"/>}
              margin="normal"
              className="mt-0 mb-2"
              onChange={(event) => this.setState({country: event.target.value})}
              fullWidth
              value={this.state.country}
              defaultValue={this.props.country}
            />
          </div>

          <div className="col-md-6 col-12">
            <TextField
              id="city"
              label={<IntlMessages id="appModule.city"/>}
              margin="normal"
              className="mt-0 mb-2"
              onChange={(event) => this.setState({city: event.target.value})}
              fullWidth
              value={this.state.city}
              defaultValue={this.props.city}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-12">
            <Checkbox
              color="primary"
              onChange={(event) => this.setState({privacy: event.target.checked})}
              defaultChecked={this.props.privacy}/>
              <span><IntlMessages id="appModule.newProject.privacy"/></span>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="form-group mb-0">
              <button type="submit" className="btn btn-primary">Save</button>
              {
                loading &&
                <div className="loader-view">
                    <CircularProgress/>
                </div>
              }
              {showMessage && NotificationManager.error(errorMessage)}
              <NotificationContainer/>
            </div>
          </div>
        </div>

      </form>
    )
  };

  render(){
    return (
      <div className="app-wrapper">
        <div className="animated slideInUpTiny animation-duration-3">
          <div className="row justify-content-md-center">
            <div className="col-12">
              {this.props.successfulResponse?
                <SweetAlert show={true} success title={<IntlMessages id="jelpzone.projects.new.success"/>}
                            onConfirm={this.onConfirmSuccessCreated}>
                    <IntlMessages id="jelpzone.projects.new.success.message"/>
                </SweetAlert>
                :
                this.renderForm()
              }
            </div>
          </div>

        </div>
      </div>
    );
  }

}

NewProject.propTypes = {

};

const mapStateToProps = ({project}) => {
  const {
    information,
    loading,
    errorMessage,
    showMessage,
    successfulResponse
  } = project;
  return {
    information,
    loading,
    errorMessage,
    showMessage,
    successfulResponse
  }
};
export default connect(mapStateToProps, {
  createNewProject,
  clearForm
})(NewProject);
