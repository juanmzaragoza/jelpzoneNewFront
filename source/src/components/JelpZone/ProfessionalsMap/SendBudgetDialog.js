import React from 'react';
import { connect } from 'react-redux';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle,} from 'material-ui/Dialog';

import Input, {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl, FormHelperText} from 'material-ui/Form';
import Select from 'material-ui/Select';

import IntlMessages from 'util/IntlMessages';

import {
  fetchLoggedInUserInformation as populateUserInfo,
} from 'actions/User';

class SendBudgetDialog extends React.Component {

	componentWillMount() {
    this.props.populateUserInfo();
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
	          	<FormControl className="w-100">
			          <InputLabel htmlFor="profession-filter"><IntlMessages id="sidebar.jelpzone.search.requestBudget.projectLabel"/></InputLabel>
			          <Select
			          	value={"Default"}
			            input={<Input id="profession-filter"/>}
			            fullWidth
			          >
			          	<MenuItem value="">
			                <em>None</em>
			            </MenuItem>
			          	{this.props.userProjects.map((userProject,index) =>
			              <MenuItem key={index} value={userProject.id}>{userProject.title}</MenuItem>
			            )}
			          </Select>
		          </FormControl>
		        )
	          :
	          (
	          	<TextField
		            margin="dense"
		            id="project"
		            label={<IntlMessages id="sidebar.jelpzone.search.requestBudget.projectLabel"/>}
		            helperText={<IntlMessages id="sidebar.jelpzone.search.requestBudget.projectHelperText"/>}
		            fullWidth
		          />
	          )
        	}
          <TextField
            margin="dense"
            id="message"
            label={<IntlMessages id="sidebar.jelpzone.search.requestBudget.messageLabel"/>}
            multiline
          	rows="4"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleRequestClose} color="secondary">
            <IntlMessages id="sidebar.jelpzone.search.requestBudget.buttonCancel"/>
          </Button>
          <Button onClick={this.props.handleRequestClose} color="primary">
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
      information,
      loading,
      errorMessage,
      showMessage
    }
};
export default connect(mapStateToProps, {
    populateUserInfo,
})(SendBudgetDialog);