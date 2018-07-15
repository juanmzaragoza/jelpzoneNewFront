import React, {Component} from 'react';
import Simple from 'components/JelpZone/carousel/simple';
import Comments from 'components/JelpZone/Comments';

class Projects extends React.Component {

  componentWillMount() {
      console.log('Projects Component WILL MOUNT!', this.props)
   }
   componentDidMount() {
      console.log('Projects Component DID MOUNT!', this.props)
   }
   componentWillReceiveProps(newProps) {
      console.log('Projects Component WILL RECIEVE PROPS!', newProps)
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Projects Component WILL UPDATE!', nextProps, nextState);
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Projects Component DID UPDATE!', prevProps, prevState)
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

  constructor(props){
    super(props);
    this.state = {
      projectsData: []
    }
  }

    render(){
      return (
        <div>
          <h3 className="card-header">
            <i className="zmdi zmdi-build mr-2"></i>
            Projects
          </h3>
          <div className="card-body">
          {this.props.projectsData.map((project, index) => <Project key={index} projectData={project} />)}
          </div>
        </div>
      );
    }

}


class Project extends Component {

  componentWillMount() {
      console.log('Project Component WILL MOUNT!', this.props)
   }
   componentDidMount() {
      console.log('Project Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {
      console.log('Project Component WILL RECIEVE PROPS!', newProps)
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Project Component WILL UPDATE!', nextProps, nextState);
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Project Component DID UPDATE!', prevProps, prevState)
   }
   componentWillUnmount() {
      console.log('Project Component WILL UNMOUNT!')
   }

  constructor(props){
    super(props);
    this.state = {
      projectData: {}
    }
  }

  render(){
    return(
      <div className="card">
        <div className="card-header">
          <h2 className="card-heading">{this.props.projectData.title}</h2>
        </div>
        <Simple />
        <Comments comments={this.props.projectData.comments}/>
      </div>
    );

  }

};

export default Projects;
