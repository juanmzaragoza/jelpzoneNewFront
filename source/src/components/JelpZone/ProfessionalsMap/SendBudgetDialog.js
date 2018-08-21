import React from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle,} from 'material-ui/Dialog';

import Input, {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Select from 'material-ui/Select';

import _ from 'lodash';

import IntlMessages from 'util/IntlMessages';

import {
  fetchLoggedInUserInformation as populateUserInfo,
} from 'actions/User';

class SendBudgetDialog extends React.Component {

	constructor() {
    super();
    this.state = {
      selectedProjectId:{
      	value: '',
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

	componentWillMount() {
    this.props.populateUserInfo();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: {
    	value: event.target.value,
    	error: null
    }});
  };

  onSubmitRequest() {

  	if(_.isEmpty(this.state.selectedProjectId.value) || _.isEmpty(this.state.newProjectName.value)){
	  	if(_.isEmpty(this.state.selectedProjectId.value)){
	  		this.setState({ 
	  			'selectedProjectId': {
			    	value: this.state.selectedProjectId,
			    	error: <IntlMessages id="sidebar.jelpzone.search.requestBudget.projectEmpty.error"/> 
			    }
			  });
	  	}

	  	if(_.isEmpty(this.state.newProjectName.value)){
	  		this.setState({ 
	  			'newProjectName': {
			    	value: this.state.newProjectName,
			    	error: <IntlMessages id="sidebar.jelpzone.search.requestBudget.projectEmpty.error"/> 
			    }
			  });
	  	}
	  } else if(_.isEmpty(this.state.message.value)){
	  	this.setState({ 
  			'message': {
		    	value: this.state.message,
		    	error: <IntlMessages id="sidebar.jelpzone.search.requestBudget.messageEmpty.error"/> 
		    }
		  });
	  } else{
	  	// submit form
	  }

  }

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleRequestClose}>
        <DialogTitle><IntlMessages id="sidebar.jelpzone.search.requestBudget.title"/></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <IntlMessages id="sidebar.jelpzone.search.requestBudget.description"/>
          </DialogContentText>
          {this.props.userProjects && this.props.userProjects.length > 0?
	          (
	          	<FormControl className="w-100"  error={this.state.selectedProjectId.error != null}>
			          <InputLabel htmlFor="user-projects">
			          	<IntlMessages id="sidebar.jelpzone.search.requestBudget.projectLabel"/>
			          </InputLabel>
			          <Select
			          	name="selectedProjectId"
			          	value={this.state.selectedProjectId.value}
			            input={<Input id="user-projects"/>}
			            onChange={this.handleChange.bind(this)}
			            fullWidth
			          >
			          	<MenuItem value="">
			                <em>None</em>
			            </MenuItem>
			          	{this.props.userProjects.map((userProject,index) =>
			              <MenuItem key={index} value={userProject.id}>{userProject.title}</MenuItem>
			            )}
			          </Select>
			          {
			          	(this.state.selectedProjectId.error != null)?
			          		<FormHelperText>{this.state.selectedProjectId.error}</FormHelperText>
			          		:
			          		null
			          }			          
		          </FormControl>
		        )
	          :
	          (
	          	<FormControl className="w-100">
		          	<TextField
			            margin="dense"
			            id="project"
			            name="newProjectName"
			            label={<IntlMessages id="sidebar.jelpzone.search.requestBudget.projectLabel"/>}
			            helperText={<IntlMessages id="sidebar.jelpzone.search.requestBudget.projectHelperText"/>}
			            onChange={this.handleChange.bind(this)}
			            fullWidth
			          />
			          {
			          	(this.state.newProjectName.error != null)?
			          		<FormHelperText>{this.state.newProjectName.error}</FormHelperText>
			          		:
			          		null
			          }		
			        </FormControl>
	          )
        	}
        	<FormControl className="w-100" error={this.state.message.error != null}>
	          <TextField
	            margin="dense"
	            id="message"
	            name="message"
	            label={<IntlMessages id="sidebar.jelpzone.search.requestBudget.messageLabel"/>}
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
            <IntlMessages id="sidebar.jelpzone.search.requestBudget.buttonCancel"/>
          </Button>
          <Button onClick={this.onSubmitRequest.bind(this)} color="primary">
            <IntlMessages id="sidebar.jelpzone.search.requestBudget.buttonSend"/>
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = ({ profile }) => {
    const {
      information,
      loading,
      errorMessage,
      showMessage
    } = profile;
    return {
      userProjects: information.projects,
      loading,
    }
};
export default connect(mapStateToProps, {
    populateUserInfo,
})(SendBudgetDialog);