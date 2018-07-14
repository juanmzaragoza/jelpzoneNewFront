import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

import { CircularProgress } from 'material-ui/Progress';

import UserProfileCard from 'components/JelpZone/userProfileCard/UserProfileCard';

import {dailyFeedData, products, projects, recentList, projectsData} from 'app/routes/dashboard/routes/Intranet/data';


import DailyFeed from 'components/JelpZone/DailyFeed/index';

import Projects from 'components/JelpZone/Projects';

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

            <div className="col-lg-3 col-sm-6 col-12">
               <UserProfileCard headerStyle="bg-secondary" information={this.props.information}/>
            </div>

            <div className="col-lg-9 col-md-8 col-sm-7 col-12">
              {this.renderForm()}
            </div>

          </div>

          <div className="row">

            <div className="col-lg-3 col-sm-6 col-12">
              <div className="jr-card">
                <div className="jr-card-header d-flex">
                  <div className="mr-auto">
                    <h3 className="card-heading d-inline-block mb-0">Your Daily Feed</h3>
                    <span className="badge badge-secondary">Today</span>
                  </div>
                </div>
                <DailyFeed data={dailyFeedData}/>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">

              <Projects data={projectsData} />

            </div>
          </div>

        </div>
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
    populateUserInfo,
    updateProfileInfo,
})(UserProfile);
