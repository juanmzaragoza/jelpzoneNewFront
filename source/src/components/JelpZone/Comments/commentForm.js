import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { UncontrolledAlert } from 'reactstrap';
 import CircularProgress from '@material-ui/core/CircularProgress';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import IntlMessages from 'util/IntlMessages';

import {
  onSubmitComment as onSubmit,
} from 'actions/Comment';

class CommentForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      userId: null,
      content: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.props.onSubmit){
      this.props.onSubmit({
        message: this.state.content,
        projectId: this.props.projectId
      });
    }
  }

  renderForm() {

    if(this.props.loading){
      return (
        <div className="loader-view">
            <CircularProgress/>
        </div>
      )
    } else{
      return (
        <form className="col-md-12 bg-grey lighten-4" onSubmit={this.onSubmit} >
          <TextField
            id="content"
            multiline
            fullWidth
            rowsMax={4}
            label={<IntlMessages id="appModule.Comments.WriteComment"/>}
            onChange={(event) => this.setState({content: event.target.value})}
          />
          <div className="text-right">
            <Button
              className="jr-btn-xs bg-primary text-white mt-1 mb-2"
              type="submit"
              ><IntlMessages id="appModule.Comments.SubmitButton"/>
            </Button>
          </div>
        </form>
      )
    }
  }

  renderCommentSuccess() {
    return (
      <UncontrolledAlert className="alert-addon-card bg-success bg-success text-white shadow-lg">
          <span className="icon-addon alert-addon">
              <i className="zmdi zmdi-check-all zmdi-hc-fw zmdi-hc-lg" />
          </span>
          <span className="d-inline-block"><IntlMessages id="appModule.Comments.Submit.success"/></span>
      </UncontrolledAlert>
    )
  }

  render(){

    return(
      <div>
        {(this.props.successfulComment != null && this.props.successfulComment.projectId == this.props.projectId)?
          this.renderCommentSuccess()
          :
          this.renderForm()
        }
      </div>   
    )
  }

}

CommentForm.propTypes = {
  projectId: PropTypes.any.isRequired
};

const mapStateToProps = ({projectComment}) => {
  const {
    successfulComment,
    loading,
    errorMessage,
    showMessage
  } = projectComment;
  return {
    successfulComment,
    loading,
    errorMessage,
    showMessage
  }
};

export default connect(mapStateToProps, {
  onSubmit
})(CommentForm);