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
    userGithubSignIn,
    userGoogleSignIn,
    userSignUp,
    userTwitterSignIn
} from 'actions/Auth';

// Stepper imports
import Stepper, {Step, StepLabel} from 'material-ui/Stepper';

function getSteps() {
    return ['Account Information', 'Personal Information', 'Billing Information', 'Confirm and Finish'];
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
            address: '',
            phoneNumber: '',
            country: '',
            city: '',
            loading: false,
            activeStep: 0,
        }
    };

    componentDidUpdate() {
        if (this.props.showMessage) {
            setTimeout(() => {
                this.props.hideMessage();
            }, 3000);
        }
        if (this.props.authUser !== null) {
            this.props.history.push('/');
        }
    }
    
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
      return ['Account Information', 'Professional Information', 'Payment Information', 'Confirm and Finish'];
    }

    getStepContent = (stepIndex) => {
      switch (stepIndex) {
        case 0:
          return this.getAccountInformation();
        case 1:
          return this.getProfessionalInformation();
        case 2:
          return this.getBillingInformation();
        case 3:
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
          label="Email"
          margin="normal"
          className="mt-0 mb-2"
          defaultValue={email}
          onChange={(event) => this.setState({email: event.target.value})}
          fullWidth
        />
        <TextField
          id="firstName"
          label="First Name"
          margin="normal"
          className="mt-0 mb-2"
          defaultValue={firstName}
          onChange={(event) => this.setState({firstName: event.target.value})}
          fullWidth
        />
        <TextField
          id="lastName"
          label="Last Name"
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
          label="Confirm Password"
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

    getProfessionalInformation = () => {

      const {
        isProfessional
      } = this.state;

      return <div className="d-flex align-items-center">
          <Checkbox 
            color="primary"
            onChange={(event) => this.setState({isProfessional: event.target.checked})}
            defaultChecked={isProfessional}/> 
            <span>I'm professional.</span>
        </div>
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
            label="Address"
            margin="normal"
            className="mt-0 mb-2"
            defaultValue={address}
            onChange={(event) => this.setState({address: event.target.value})}
            fullWidth
          />
          <TextField
            id="phoneNumber"
            label="Phone Number"
            margin="normal"
            className="mt-0 mb-2"
            defaultValue={phoneNumber}
            onChange={(event) => this.setState({phoneNumber: event.target.value})}
            fullWidth
          />
          <TextField
            id="country"
            label="Country"
            margin="normal"
            className="mt-0 mb-2"
            defaultValue={country}
            onChange={(event) => this.setState({country: event.target.value})}
            fullWidth
          />
          <TextField
            id="city"
            label="City"
            margin="normal"
            className="mt-0 mb-2"
            defaultValue={city}
            onChange={(event) => this.setState({city: event.target.value})}
            fullWidth
          />
        </div>
    }

    getConfirmation = () => {
      return <div className="tab-pane" id="tab2-4">
        <h3 className="title text-primary">Accept and Confirm</h3>
        <p><strong>Important!</strong> Now, we need enable your location</p>
        <div className="d-flex align-items-center">
        
        </div>
      </div>
    }

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
                    <h1>Sign Up</h1>
                </div>

                <div className="mb-4">
                    <h2><IntlMessages id="appModule.createAccount"/></h2>
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
                                Back
                            </Button>
                            <Button variant="raised" color="primary" onClick={() => {
                                if(activeStep === steps.length - 1){
                                  this.props.showAuthLoader();
                                  this.props.userSignUp(this.state);
                                } else{
                                  this.handleNext();
                                }
                              }}>
                              {activeStep === steps.length - 1 ? <IntlMessages id="appModule.regsiter"/> : 'Next'}
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

                              <li>
                                  <IconButton className="icon"
                                              onClick={() => {
                                                  this.props.showAuthLoader();
                                                  this.props.userGithubSignIn();
                                              }}>
                                      <i className="zmdi zmdi-github"/>
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
    userGithubSignIn,
    userTwitterSignIn
})(SignUp);
