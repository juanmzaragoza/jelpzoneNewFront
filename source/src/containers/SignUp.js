import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Checkbox from 'material-ui/Checkbox';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { CircularProgress } from 'material-ui/Progress';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userSignUp,
    userTwitterSignIn
} from 'actions/Auth';

import Dropzone from 'react-dropzone';
// Stepper imports
import Stepper, {Step, StepLabel} from 'material-ui/Stepper';

function getSteps() {
    return ['Account Information', 'Profile Picture', 'Personal Information', 'Billing Information', 'Confirm and Finish'];
}

class SignUp extends React.Component {

    // components hooks
    constructor(props) {
        super();
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            isProfessional: false,
            frontPicture: null,
            backPicture: null,
            profilePicture: null,
            address: '',
            phoneNumber: '',
            country: '',
            city: '',
            location: {
              lat: 0,
              lng: 0
            },
            notifications: false,
            loading: false,
            activeStep: 0,
        }
    };

    componentDidUpdate() {
        this.showMessage(this.props.showMessage);
        if (this.props.authUser !== null) {
            this.props.history.push('/');
        }
    }

    showMessage = (showMessage) => {
      if (showMessage) {
        setTimeout(() => {
          this.props.hideMessage();
        }, 3000);
      }
    };

    // helper methods
    handleNext = () => {

        const { activeStep } = this.state;
        const nextActiveStep = activeStep + 1;
        const steps = getSteps();

        this.setState({
          activeStep: nextActiveStep,
        });

    };

    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    // STEPPER METHODS
    getSteps = () => {
      return ['Account Info', 'Professional Info', 'Profile Picture', 'Payment Information', 'Confirm and Finish'];
    }

    getStepContent = (stepIndex) => {
      switch (stepIndex) {
        case 0:
          return this.getAccountInformation();
        case 1:
          return this.getProfilePicture();
        case 2:
          return this.getProfessionalInformation();
        case 3:
          return this.getBillingInformation();
        case 4:
          return this.getConfirmation();

        default:
          return 'Uknown stepIndex';
      }
    }

    getAccountInformation = () => {

      const {
        email,
        firstName,
        lastName,
        password,
        confirmPassword
      } = this.state;

      return <div>
        <TextField
          id="email"
          label={<IntlMessages id="appModule.email"/>}
          margin="normal"
          className="mt-0 mb-2"
          defaultValue={email}
          onChange={(event) => this.setState({email: event.target.value})}
          fullWidth
        />
        <TextField
          id="firstName"
          label={<IntlMessages id="appModule.firstName"/>}
          margin="normal"
          className="mt-0 mb-2"
          defaultValue={firstName}
          onChange={(event) => this.setState({firstName: event.target.value})}
          fullWidth
        />
        <TextField
          id="lastName"
          label={<IntlMessages id="appModule.lastName"/>}
          margin="normal"
          className="mt-0 mb-2"
          defaultValue={lastName}
          onChange={(event) => this.setState({lastName: event.target.value})}
          fullWidth
        />
        <TextField
          id="password"
          label={<IntlMessages id="appModule.password"/>}
          type="password"
          autoComplete="current-password"
          margin="normal"
          className="mt-0 mb-2"
          defaultValue={password}
          onChange={(event) => this.setState({password: event.target.value})}
          fullWidth
        />
        <TextField
          id="confirmPassword"
          label={<IntlMessages id="appModule.confirmPassword"/>}
          type="password"
          autoComplete="current-password"
          margin="normal"
          className="mt-0 mb-2"
          defaultValue={confirmPassword}
          onChange={(event) => this.setState({confirmPassword: event.target.value})}
          fullWidth
        />
      </div>
    }

    getProfilePicture = () => {

      const {
        profilePicture
      } = this.state;

      return (
          <div className="d-flex justify-content-between"
              style={{'padding': '5px'}}>
            <Dropzone
              accept="image/jpeg, image/png"
              onDrop={this.onDropProfilePicture.bind(this)}
              multiple={false}
            >
              {profilePicture?
                <div style={{'maxWidth': '100%','maxHeight': '100%'}} >
                  <img style={{'maxWidth': 'inherit','maxHeight': 'inherit'}} key={profilePicture.length} src={profilePicture.preview} />
                </div>
                :
                <IntlMessages id="appModule.placeHolderProfilePicture"/>
              }
            </Dropzone>
          </div>
          )
    }

    getProfessionalInformation = () => {

      const {
        isProfessional,
        frontPicture,
        backPicture
      } = this.state;

      return <div>
        <div className="d-flex align-items-center">
          <Checkbox
            color="primary"
            onChange={(event) => this.setState({isProfessional: event.target.checked})}
            defaultChecked={isProfessional}/>
            <span><IntlMessages id="appModule.amProfessional"/></span>
        </div>
        {isProfessional == true ?
          (
            <div className="d-flex justify-content-between"
                style={{'padding': '5px'}}>
              <Dropzone
                accept="image/jpeg, image/png"
                onDrop={this.onDropFrontPicture.bind(this)}
                multiple={false}
              >
                {frontPicture?
                  <div style={{'maxWidth': '100%','maxHeight': '100%'}} >
                    <img style={{'maxWidth': 'inherit','maxHeight': 'inherit'}} key={frontPicture.length} src={frontPicture.preview} />
                  </div>
                  :
                  <IntlMessages id="appModule.placeHolderIdentificationFront"/>
                }
              </Dropzone>
              <Dropzone
                accept="image/jpeg, image/png"
                onDrop={this.onDropBackPicture.bind(this)}
                multiple={false}
              >
                {backPicture?
                  <div style={{'maxWidth': '100%','maxHeight': '100%'}} >
                    <img style={{'maxWidth': 'inherit','maxHeight': 'inherit'}} key={backPicture.length} src={backPicture.preview} />
                  </div>
                  :
                  <IntlMessages id="appModule.placeHolderIdentificationBack"/>
                }                
              </Dropzone>
            </div>
          ) : null
        }
      </div>
    }

    onDropFrontPicture = (acceptedFiles) => {
      this.setState({frontPicture: acceptedFiles[0]})
    }

    onDropBackPicture = (acceptedFiles) => {
      this.setState({backPicture: acceptedFiles[0]})
    }

    onDropProfilePicture = (acceptedFiles) => {
      this.setState({profilePicture: acceptedFiles[0]});
    }


    getBillingInformation = () => {

      const {
        address,
        phoneNumber,
        country,
        city
      } = this.state;

      return <div>
          <TextField
            id="address"
            label={<IntlMessages id="appModule.address"/>}
            margin="normal"
            className="mt-0 mb-2"
            defaultValue={address}
            onChange={(event) => this.setState({address: event.target.value})}
            fullWidth
          />
          <TextField
            id="phoneNumber"
            label={<IntlMessages id="appModule.phone"/>}
            margin="normal"
            className="mt-0 mb-2"
            defaultValue={phoneNumber}
            onChange={(event) => this.setState({phoneNumber: event.target.value})}
            fullWidth
          />
          <TextField
            id="country"
            label={<IntlMessages id="appModule.country"/>}
            margin="normal"
            className="mt-0 mb-2"
            defaultValue={country}
            onChange={(event) => this.setState({country: event.target.value})}
            fullWidth
          />
          <TextField
            id="city"
            label={<IntlMessages id="appModule.city"/>}
            margin="normal"
            className="mt-0 mb-2"
            defaultValue={city}
            onChange={(event) => this.setState({city: event.target.value})}
            fullWidth
          />
        </div>
    }

    getConfirmation = () => {

      const {
        location,
        notifications,
      } = this.state;

      let buttonEnablePositionClass = '';
      if(location.lat != 0){
        buttonEnablePositionClass='jr-btn text-uppercase bg-green text-white';
      } else{
        buttonEnablePositionClass='jr-btn text-uppercase text-black';
      }

      let buttonEnableNotificacionClass = '';
      if(notifications){
        buttonEnableNotificacionClass='jr-btn text-uppercase bg-green text-white';
      } else{
        buttonEnableNotificacionClass='jr-btn text-uppercase text-black';
      }

      return <div className="tab-pane" id="tab2-4">
        <h3 className="title text-primary"><IntlMessages id="appModule.geoAndNotifEnableTitle"/></h3>
        <p><IntlMessages id="appModule.geoAndNotifEnableMgs"/></p>
        <div className="d-flex justify-content-between">
          <Button variant="raised" color="default" className={buttonEnablePositionClass}
            onClick={this.enableGeolocation.bind(this)}>
            <IntlMessages id="appModule.enableGeolocation"/>
          </Button>
          <Button variant="raised" color="default" className={buttonEnableNotificacionClass}
            onClick={this.enableNotifications.bind(this)}>
            <IntlMessages id="appModule.enableNotifications"/>
          </Button>
        </div>
      </div>
    }

    enableGeolocation = (event) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.onEnableGeoloctionSuccess, this.onEnableGeoloctionError);
      }
      else {
        this.showMessage('Geolocation is not supported for this Browser/OS.');
      }
    };

    onEnableGeoloctionSuccess =(position) => {
      // Do magic with location
      let startPos = position;
      this.setState({location: {lat: startPos.coords.latitude, lng: startPos.coords.longitude}});
    };

    onEnableGeoloctionError = (error) => {
      switch(error.code) {
        case error.TIMEOUT:
          // The user didn't accept the callout
          self.showMessage('Cannot get yout location.');
          break;
      }
    };

    enableNotifications = (event) => {
      this.setState({notifications: true});
    };

    render() {

      const {
        activeStep
      } = this.state;
      const steps = getSteps();
      const {
        showMessage,
        loader,
        alertMessage
      } = this.props;

      return (
        <div
          className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
          <div className="app-login-main-content">

              <div className="app-login-content" style={{width: '100%'}} >
                <div className="app-login-header">
                    <h1><IntlMessages id="appModule.createAccount"/></h1>
                </div>

                <Stepper activeStep={activeStep} alternativeLabel className="horizontal-stepper-linear">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} className={`horizontal-stepper ${index === activeStep ? 'active' : ''}`}>
                                <StepLabel className="stepperlabel">{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                <div className="app-login-form">
                  <form method="post" action="/">
                    {this.state.activeStep === steps.length ? (
                      <div style={{'textAlign': 'center'}}>
                        <CircularProgress size={80} thickness={5} />
                      </div>
                    ) : (
                      <div>
                        {this.getStepContent(activeStep)}

                        <div className="mb-3 d-flex align-items-center justify-content-between">
                            <Button
                              disabled={activeStep === 0}
                              onClick={this.handleBack}
                              className="mr-2"
                            >
                            <IntlMessages id="appModule.back"/>
                            </Button>
                            <Button variant="raised" color="primary" onClick={() => {
                                if(activeStep === steps.length - 1){
                                  this.props.showAuthLoader();
                                  this.props.userSignUp(this.state);
                                } else{
                                  this.handleNext();
                                }
                              }}>
                              {activeStep === steps.length - 1 ? <IntlMessages id="appModule.register"/> : <IntlMessages id="appModule.next"/>}
                            </Button>
                            <Link to="/signin">
                                <IntlMessages id="signUp.alreadyMember"/>
                            </Link>
                        </div>
                        <div className="app-social-block my-1 my-sm-3">
                          <IntlMessages
                              id="signIn.connectWith"/>
                          <ul className="social-link">
                              <li>
                                  <IconButton className="icon"
                                              onClick={() => {
                                                  this.props.showAuthLoader();
                                                  this.props.userFacebookSignIn();
                                              }}>
                                      <i className="zmdi zmdi-facebook"/>
                                  </IconButton>
                              </li>

                              <li>
                                  <IconButton className="icon"
                                              onClick={() => {
                                                  this.props.showAuthLoader();
                                                  this.props.userTwitterSignIn();
                                              }}>
                                      <i className="zmdi zmdi-twitter"/>
                                  </IconButton>
                              </li>

                              <li>
                                  <IconButton className="icon"
                                              onClick={() => {
                                                  this.props.showAuthLoader();
                                                  this.props.userGoogleSignIn();

                                              }}>
                                      <i className="zmdi zmdi-google-plus"/>
                                  </IconButton>
                              </li>
                          </ul>
                        </div>
                      </div>
                    )}

                  </form>
                </div>
              </div>

          </div>

          {
              loader &&
              <div className="loader-view">
                  <CircularProgress/>
              </div>
          }
          {showMessage && NotificationManager.error(alertMessage)}
          <NotificationContainer/>
        </div>
      )
    }
}

const mapStateToProps = ({auth}) => {
    const {loader, alertMessage, showMessage, authUser} = auth;
    return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
    userSignUp,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userTwitterSignIn
})(SignUp);
