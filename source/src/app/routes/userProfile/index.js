import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { CircularProgress } from 'material-ui/Progress';

import UserProfileCard from 'components/dashboard/Common/userProfileCard/UserProfileCard';
import IntlMessages from 'util/IntlMessages';

import { 
  fetchLoggedInUserInformation as populateUserInfo, 
  updateUserInformation as updateProfileInfo 
} from 'actions/User';

class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
    	email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      professional: false,
      address: '',
      phoneNumber: '',
      country: '',
      city: '',
    }
  }

  componentWillMount = () => {
  	this.props.populateUserInfo();
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({...nextProps.information})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.props.updateProfileInfo){
      this.props.updateProfileInfo(this.state);
    }
  }

  renderForm = () => {
  	return (
  		<form action="" className="contact-form jr-card"  onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-4 col-12">
            <TextField
		          id="firstName"
		          label={<IntlMessages id="appModule.firstName"/>}
		          margin="normal"
		          className="mt-0 mb-2"
		          onChange={(event) => this.setState({firstName: event.target.value})}
		          fullWidth
              value={this.state.firstName}
		          defaultValue={this.props.firstName}
		        />
          </div>
          <div className="col-md-4 col-12">
            <TextField
		          id="lastName"
		          label={<IntlMessages id="appModule.lastName"/>}
		          margin="normal"
		          className="mt-0 mb-2"
		          onChange={(event) => this.setState({lastName: event.target.value})}
		          fullWidth
              value={this.state.lastName}
		          defaultValue={this.props.lastName}
		        />
          </div>
          <div className="col-md-4 col-12">
            <TextField
		          id="email"
		          label={<IntlMessages id="appModule.email"/>}
		          margin="normal"
		          className="mt-0 mb-2"
		          onChange={(event) => this.setState({email: event.target.value})}
		          fullWidth
              value={this.state.email}
		          defaultValue={this.props.email}
		        />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12">
            <TextField
		          id="password"
		          label={<IntlMessages id="appModule.password"/>}
		          type="password"
		          autoComplete="current-password"
		          margin="normal"
		          className="mt-0 mb-2"
		          onChange={(event) => this.setState({password: event.target.value})}
		          fullWidth
		        />
          </div>
          <div className="col-md-6 col-12">
            <TextField
		          id="confirmPassword"
		          label={<IntlMessages id="appModule.confirmPassword"/>}
		          type="password"
		          autoComplete="current-password"
		          margin="normal"
		          className="mt-0 mb-2"
		          onChange={(event) => this.setState({confirmPassword: event.target.value})}
		          fullWidth
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
		            id="phoneNumber"
		            label={<IntlMessages id="appModule.phone"/>}
		            margin="normal"
		            className="mt-0 mb-2"
		            onChange={(event) => this.setState({phoneNumber: event.target.value})}
		            fullWidth
                value={this.state.phoneNumber}
		            defaultValue={this.props.phoneNumber}
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
            <div className="col-md-6 col-12">
              <Checkbox
		            color="primary"
		            onChange={(event) => this.setState({professional: event.target.checked})}
		            defaultChecked={this.props.professional}/>
		            <span><IntlMessages id="appModule.amProfessional"/></span>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="form-group mb-0">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
      </form>
  	)
  };

  render(){

    const {
      showMessage,
      loading,
      alertMessage
    } = this.props;

  	return (
  		<div className="app-wrapper">
  			<div className="animated slideInUpTiny animation-duration-3">

	    		<div className="row justify-content-md-center">
	    			<div className="col-lg-4 col-sm-6 col-12">
               <UserProfileCard headerStyle="bg-se'condary"/>
            </div>
	    		</div>

	    		<div className="row justify-content-md-center">
            <div className="col-lg-9 col-md-8 col-sm-7 col-12">
              {this.renderForm()}
            </div>
          </div>
	    	</div>

        {
            loading &&
            <div className="loader-view">
                <CircularProgress/>
            </div>
        }
        {showMessage && NotificationManager.error(alertMessage)}
        <NotificationContainer/>

  		</div>
  	);
  }

}

UserProfile.propTypes = {
  populateUserInfo: PropTypes.func.isRequired,
  updateProfileInfo: PropTypes.func,
};

const mapStateToProps = ({profile}) => {
    const {
      information,
      loading,
      alertMessage,
      showMessage
    } = profile;
    return {
      information,
      loading,
      alertMessage,
      showMessage
    }
};
export default connect(mapStateToProps, {
    populateUserInfo,
    updateProfileInfo,
})(UserProfile);