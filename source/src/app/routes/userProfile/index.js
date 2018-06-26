import React, {Component} from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

import UserProfileCard from 'components/dashboard/Common/userProfileCard/UserProfileCard';
import IntlMessages from 'util/IntlMessages';

class UserProfile extends Component {

  constructor() {
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
    }
  }

  renderForm = () => {
  	return (
  		<form action="" className="contact-form jr-card">
        <div className="row">
          <div className="col-md-4 col-12">
            <TextField
		          id="firstName"
		          label={<IntlMessages id="appModule.firstName"/>}
		          margin="normal"
		          className="mt-0 mb-2"
		          onChange={(event) => this.setState({firstName: event.target.value})}
		          fullWidth
		          defaultValue={this.state.firstName}
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
		          defaultValue={this.state.lastName}
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
		          defaultValue={this.state.email}
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
		            defaultValue={this.state.address}
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
		            defaultValue={this.state.phone}
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
		            defaultValue={this.state.country}
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
		            defaultValue={this.state.city}
		          />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-12">
              <Checkbox
		            color="primary"
		            onChange={(event) => this.setState({isProfessional: event.target.checked})}
		            defaultChecked={this.state.isProfessional}/>
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
  		</div>
  	);
  }

}

/*const mapStateToProps = () => {
    const {width} = settings;
    const {
        loader,
        alertMessage,
        showMessage,
        noContentFoundMessage,
        selectedSectionId,
        drawerState,
        user,
        searchUser,
        filterOption,
        allContact,
        contactList,
        selectedContact,
        selectedContacts,
        addContactState
    } = contacts;
    return {
        width,
        loader,
        alertMessage,
        showMessage,
        noContentFoundMessage,
        selectedSectionId,
        drawerState,
        user,
        searchUser,
        filterOption,
        allContact,
        contactList,
        selectedContact,
        selectedContacts,
        addContactState
    }
};
export default connect(mapStateToProps, {
    //fetchContacts,
})(UserProfile);*/

export default UserProfile;