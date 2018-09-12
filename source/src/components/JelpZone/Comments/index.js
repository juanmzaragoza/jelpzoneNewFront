import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import CardBox from 'components/CardBox/index';
import TextField from '@material-ui/core/TextField';

import CommentForm from './commentForm';

import IntlMessages from 'util/IntlMessages';

class Comments extends Component {

  constructor(props){
    super(props);
    this.state = {
      comments: []
    }
  }

  render(){
    return (
      <div>
        <h3 className="card-footer">
          <i className="zmdi zmdi-comments mr-1"></i><IntlMessages id="appModule.Comments.CommentsTitle"/>
        </h3>
        <CommentForm projectId={this.props.projectId} />
        <ul className="list list-unstyled mr-3 ml-3 mt-3 mb-3">
        {(this.props.comments && this.props.comments.length > 0)?
          this.props.comments.map(
            (comment, index) => <Comment key={index} commentData={comment}/>
          )
          :
          null
        }
        </ul>
      </div>
    );
  }

}

Comments.propTypes = {
  projectId: PropTypes.any.isRequired,
  comments: PropTypes.array,
};

class Comment extends Component {

  constructor(props){
    super(props);
    this.state = {
      commentData: {}
    }
  }

  render(){
    return(
      <li className="media user-profile media-list mb-1 pb-1" key={this.props.commentData.id}>
          <Avatar
              alt={this.props.commentData.userName}
              src={this.props.commentData.image}
              className="user-avatar mr-2"
          />
        <div className="media-body align-self-center">
          <h5 className="mb-1">{this.props.commentData.userName} <span className="meta-date text-right">{this.props.commentData.createdDate}</span></h5>
          <div className="meta-comment mb-1">{this.props.commentData.content}</div>

          <div className="btn-group-mins text-right">
            <Tooltip id="tooltip-like" title={<IntlMessages id="appModule.likes.like"/>}>
            <a
              className="btn jr-btn-xs bg-primary"
            >
              <i className="zmdi zmdi-thumb-up text-white mr-1"></i>
            </a>
            </Tooltip>
            <Tooltip id="tooltip-dislike" title={<IntlMessages id="appModule.likes.disLike"/>}>
            <a
              className="btn jr-btn-xs bg-info"
            >
              <i className="zmdi zmdi-thumb-down text-white"></i>
            </a>
            </Tooltip>
          </div>
        </div>
      </li>
    );
  }

};

export default Comments;
