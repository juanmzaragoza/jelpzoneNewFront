import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import IconButton from '@material-ui/core/IconButton';

 import CircularProgress from '@material-ui/core/CircularProgress';



import UserProfileCard from 'components/JelpZone/userProfileCard/UserProfileCard';

import DailyFeed from 'components/JelpZone/DailyFeed/index';

import Projects from 'components/JelpZone/Projects/list';

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
    if(this.props.userId){
      this.props.populateUserInfo(this.props.userId);
    } else{
      this.props.populateUserInfo();
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({...nextProps.information})
  }

  componentWillUpdate  = (nextProps, nextState) => { 
    //if i have a user id passed like param, i want to check if the user exists
    if(nextProps.showMessage,nextProps.userId && nextProps.errorMessage && nextProps.showMessage){ // user not found
      this.props.history.push('/app/not-found');
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render(){

    return (
      <div className="app-wrapper">
        <div className="animated slideInUpTiny animation-duration-3">

          <div className="row">

            <div className="col-lg-12">
               <UserProfileCard headerStyle="bg-secondary" information={this.props.information}/>
            </div>

          </div>
          <div className="row">

            <div className="col-lg-8 col-md-8 col-sm-12">
              <Projects />
            </div>
            {
             /**
              * Si el visitante del perfil no es el usuario actual
              * o sea, no está viendo su propio perfil sino uno ajeno
              * esta columna no debe verse
              */
            }
            {
              this.props.isMyProfile?
                <div className="col-lg-4 col-md-4 col-sm-12">
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
                :
                null
            }
            

          </div>

        </div>
      </div>
    );
  }

}

UserProfile.propTypes = {
  populateUserInfo: PropTypes.func.isRequired
};

export default UserProfile;