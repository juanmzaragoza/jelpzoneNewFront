import React from 'react';
import { connect } from 'react-redux';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import SweetAlert from 'react-bootstrap-sweetalert';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import CircularProgress from '@material-ui/core/CircularProgress';
import Zoom from '@material-ui/core/Zoom';

import _ from 'lodash';

import IntlMessages from 'util/IntlMessages';
import { isEmpty as isEmptyStr } from 'util/Strings';

import {
  fetchLoggedInUserInformation as populateUserInfo,
} from 'actions/User';

import {
  sendEstimateRequest,
  clearEstimateRequestForm
} from 'actions/Project';

class SendEstimateRequestDialog extends React.Component {

	constructor() {
    super();
    this.state = {
      projectId:{
      	value: 'none',
      	error: null
      },
      newProjectName: {
      	value: '',
      	error: null
      },
      message: {
      	value: '',
      	error: null
      },
    };
  }

  componentDidMount() { //clear form
  	this.props.clearEstimateRequestForm();
  }

	componentWillMount() {
    this.props.populateUserInfo();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: {
    	value: event.target.value,
    	error: null
    }});
  };

  handleConfirmDialog(event) {
  	const props = this.props;
  	props.handleRequestClose();
  	props.clearEstimateRequestForm();
  	// update user information (projects)
  	props.populateUserInfo();
  }

  onSubmitRequest(event) {
  	// validates that user has entered a project
  	if(this.state.projectId.value == 'none' && isEmptyStr(this.state.newProjectName.value)){
	  	if(isEmptyStr(this.state.newProjectName.value)) {
	  		this.setState({ 
	  			'newProjectName': {
			    	value: this.state.newProjectName.value,
			    	error: <IntlMessages id="sidebar.jelpzone.search.estimateRequest.projectEmpty.error"/> 
			    }
			  });
	  	} else{
	  		this.setState({ 
	  			'projectId': {
			    	value: this.state.projectId.value,
			    	error: <IntlMessages id="sidebar.jelpzone.search.estimateRequest.projectEmpty.error"/> 
			    }
			  });
	  	}
	  } else if(isEmptyStr(this.state.message.value)){ // else, that user has entered a message
	  	this.setState({
	  		'projectId': {
		    	value: this.state.projectId.value,
		    	error: null
		    },
  			'message': {
		    	value: this.state.message.value,
		    	error: <IntlMessages id="sidebar.jelpzone.search.estimateRequest.messageEmpty.error"/> 
		    }
		  });
	  } else{
	  	// submit form
	  	const estimateRequest = Object.assign({},_.mapValues(this.state, function(el) { return el.value; }),{
	  		projectId: this.state.projectId.value == 'none'? '':this.state.projectId.value,
	  		clientId: this.props.clientId,
	  		professionalId: this.props.professionalId,
	  	});
	  	this.props.sendEstimateRequest(estimateRequest);
	  }

  }

  haveProjects() {
  	return this.props.userProjects && this.props.userProjects.length > 0;
  }

  render() {
    return (
    	this.props.successfulResponse?
	    	<SweetAlert show={true} success title={<IntlMessages id="jelpzone.search.estimateRequest.success"/>}
	                  onConfirm={this.handleConfirmDialog.bind(this)}>
	          <IntlMessages id="jelpzone.search.estimateRequest.success.message"/>
	      </SweetAlert>
	      :
	      <Dialog open={this.props.open} onClose={this.props.handleRequestClose}>
	        <DialogTitle><IntlMessages id="sidebar.jelpzone.search.estimateRequest.title"/></DialogTitle>
	        	<Zoom in={this.props.sendingRequest}>
		          <div
		              className="d-flex justify-content-center align-items-center ">
		              <CircularProgress/>
		          </div>
	          </Zoom>
	          <Zoom in={this.props.sendingRequest == false}>
		          <div>
				        <DialogContent>
				          <DialogContentText>
				            <IntlMessages id="sidebar.jelpzone.search.estimateRequest.description"/>
				          </DialogContentText>
				          <FormControl className="w-100"  error={this.state.projectId.error != null}>
					          <InputLabel htmlFor="user-projects">
					          	<IntlMessages id="sidebar.jelpzone.search.estimateRequest.projectLabel"/>
					          </InputLabel>

					          <Select
					          	name="projectId"
					          	value={this.state.projectId.value}
					            input={<Input id="user-projects"/>}
					            onChange={this.handleChange.bind(this)}
					            fullWidth
					          >
					          	<MenuItem selected={this.haveProjects() == false} value="none">
					                <em>None</em>
					            </MenuItem>
					          	{this.props.userProjects && this.props.userProjects.map((userProject,index) =>
					              <MenuItem key={index} value={userProject.id}>{userProject.title}</MenuItem>
					            )}
					          </Select>
					          {
					          	(this.state.projectId.error != null)?
					          		<FormHelperText>{this.state.projectId.error}</FormHelperText>
					          		:
					          		null
					          }			          
				          </FormControl>

				          {(this.haveProjects() == false || this.state.projectId.value == 'none')?
			          		<FormControl className="w-100">
					          	<TextField
					          		error={this.state.newProjectName.error != null}
						            margin="dense"
						            id="project"
						            name="newProjectName"
						            label={<IntlMessages id="sidebar.jelpzone.search.estimateRequest.projectLabel.new"/>}
						            helperText={this.state.newProjectName.error != null?
						            	this.state.newProjectName.error
						            	:
						            	<IntlMessages id="sidebar.jelpzone.search.estimateRequest.projectLabel.helperText"/>}
						            onChange={this.handleChange.bind(this)}
						            fullWidth
						          />
					          </FormControl>
			          		:
			          		null}

				        	<FormControl className="w-100" error={this.state.message.error != null}>
					          <TextField
					            margin="dense"
					            id="message"
					            name="message"
					            label={<IntlMessages id="sidebar.jelpzone.search.estimateRequest.messageLabel"/>}
					            multiline
					          	rows="4"
					          	onChange={this.handleChange.bind(this)}
					            fullWidth
					          />
					          {
					          	(this.state.message.error != null)?
					          		<FormHelperText>{this.state.message.error}</FormHelperText>
					          		:
					          		null
					          }
					        </FormControl>

				        </DialogContent>
				        <DialogActions>
				          <Button onClick={this.props.handleRequestClose} color="secondary">
				            <IntlMessages id="sidebar.jelpzone.search.estimateRequest.buttonCancel"/>
				          </Button>
				          <Button onClick={this.onSubmitRequest.bind(this)} color="primary">
				            <IntlMessages id="sidebar.jelpzone.search.estimateRequest.buttonSend"/>
				          </Button>
				        </DialogActions>
				      </div>
			      </Zoom>
			      {this.props.showMessage && NotificationManager.error(this.props.errorMessage)}
            <NotificationContainer/>
	      </Dialog>
    );
  }
}

const mapStateToProps = ({ profile, estimateRequestForm }) => {
    const {
      information,
    } = profile;

    const {
    	loading,
    	successfulResponse,
    	showMessage,
    	errorMessage
    } = estimateRequestForm;

    return {
    	clientId: information.id,
      userProjects: information.projects,
      sendingRequest: loading,
      successfulResponse
    }
};
export default connect(mapStateToProps, {
    populateUserInfo,
    sendEstimateRequest,
    clearEstimateRequestForm
})(SendEstimateRequestDialog);