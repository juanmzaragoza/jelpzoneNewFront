import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';

import { CircularProgress } from 'material-ui/Progress';

import IntlMessages from 'util/IntlMessages';

/*
import {
  fetchLoggedInUserInformation as populateUserInfo,
  updateUserInformation as updateProfileInfo
} from 'actions/User';
*/

class NewProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      privacy: false,
      status: 0,
      location: {},
      address: '',
      country: '',
      city: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    /*if(this.props.updateProfileInfo){
      this.props.updateProfileInfo(this.state);
    }*/
  }

  renderForm = () => {

    const {
      showMessage,
      loading,
      errorMessage
    } = this.props;

    return (
      <form action="" className="contact-form jr-card"  onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-4 col-12">
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
          <div className="col-md-4 col-12">
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
              <TextField
                label={<IntlMessages id="appModule.newProject.privacy"/>}
                id="privacy"
                margin="normal"
                className="mt-0 mb-2"
                onChange={(event) => this.setState({privacy: event.target.value})}
                value={this.state.privacy}
                defaultValue={this.props.privacy}
                />
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

            <div className="col-lg-9 col-md-8 col-sm-7 col-12">
              {this.renderForm()}
            </div>

          </div>

        </div>
      </div>
    );
  }

}

NewProject.propTypes = {

};

const mapStateToProps = ({profile}) => {
    const {
      information,
      loading,
      errorMessage,
      showMessage
    } = profile;
    return {
      information,
      loading,
      errorMessage,
      showMessage
    }
};
export default connect(mapStateToProps, {
    //populateUserInfo
})(NewProject);
