import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';

class Comments extends Component {

  componentWillMount() {
      console.log('Comments Component WILL MOUNT!', this.props)
   }
   componentDidMount() {
      console.log('Comments Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {
      console.log('Comments Component WILL RECIEVE PROPS!', newProps)
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Comments Component WILL UPDATE!', nextProps, nextState);
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Comments Component DID UPDATE!', prevProps, prevState)
   }
   componentWillUnmount() {
      console.log('Comments Component WILL UNMOUNT!')
   }

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
          <i className="zmdi zmdi-comment-text mr-2"></i>Comments
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
            <a className="btn jr-btn-xs btn-primary" href="javascript:void(0)">
              <i className="zmdi zmdi-thumb-up mr-1"></i>
            </a>
            <a className="btn jr-btn-xs btn-secondary" href="javascript:void(0)">
              <i className="zmdi zmdi-thumb-down mr-1"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }

};

export default Comments;
