import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Tooltip from 'material-ui/Tooltip';
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
          <i className="zmdi zmdi-comment-text mr-2"></i><IntlMessages id="appModule.Comments.CommentsTitle"/>
        </h3>
        <div className="card-body">
        {this.props.comments.map(
          (comment, index) => <Comment key={index} commentData={comment}/>
        )}
        </div>
      </div>
    );
  }

}

class Comment extends Component {

  constructor(props){
    super(props);
    this.state = {
      commentData: {}
    }
  }

  render(){
    return(
      <div className="media user-profile" key={this.props.commentData.id}>

          <Avatar
              alt={this.props.commentData.userName}
              src={this.props.commentData.image}
              className="user-avatar mr-2"
          />

        <div className="media-body align-self-center">
          <h5 className="mb-1">{this.props.commentData.userName} @ {this.props.commentData.date}:</h5>
          {this.props.commentData.description}
          <hr/>
          <div className="btn-group-mins text-right">
            <Tooltip id="tooltip-like" title={<IntlMessages id="appModule.likes.like"/>}>
            <a
              className="btn btn-xs bg-primary"
            >
              <i className="zmdi zmdi-thumb-up text-white mr-1"></i>
            </a>
            </Tooltip>
            <Tooltip id="tooltip-dislike" title={<IntlMessages id="appModule.likes.disLike"/>}>
            <a
              className="btn btn-xs bg-info"
            >
              <i className="zmdi zmdi-thumb-down text-white mr-1"></i>
            </a>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  }

};

export default Comments;
