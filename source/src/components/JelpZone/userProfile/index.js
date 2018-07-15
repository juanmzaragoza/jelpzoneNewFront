import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import IconButton from 'material-ui/IconButton';

import { CircularProgress } from 'material-ui/Progress';

import UserProfileCard from 'components/JelpZone/userProfileCard/UserProfileCard';

import DailyFeed from 'components/JelpZone/DailyFeed/index';

import Projects from 'components/JelpZone/Projects';

import {dailyFeedData, products, projects, recentList, projectsData} from 'app/routes/dashboard/routes/Intranet/data';
import IntlMessages from 'util/IntlMessages';

import {
  fetchLoggedInUserInformation as populateUserInfo,
} from 'actions/User';

class UserProfile extends Component {

  constructor(props) {
    super(props);
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
      projects: []
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
  }

  render(){
    return (
      <div className="app-wrapper">
        <div className="animated slideInUpTiny animation-duration-3">

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

              <Projects projectsData={projectsData}/>

            </div>

            <div className="col-lg-3 col-sm-6 col-12">
               <UserProfileCard headerStyle="bg-secondary" information={this.props.information}/>
            </div>


          </div>

        </div>
      </div>
    );
  }

}

UserProfile.propTypes = {
  populateUserInfo: PropTypes.func.isRequired
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
})(UserProfile);
