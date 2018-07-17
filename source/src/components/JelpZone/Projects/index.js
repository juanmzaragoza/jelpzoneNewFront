import React, {Component} from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Menu, {MenuItem} from 'material-ui/Menu';
import Simple from 'components/JelpZone/carousel/simple';
import Comments from 'components/JelpZone/Comments';

import IntlMessages from 'util/IntlMessages';

class Projects extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      projectsData: []
    }
  }

    render(){
      return (
        <div>
          {this.props.projectsData.map((project, index) => <Project key={index} projectData={project} />)}
        </div>
      );
    }

}


class Project extends Component {

  constructor(props){
    super(props);
    this.state = {
      projectData: {}
    }
  }

  renderPrivacy(){

    const privacy = this.props.projectData.privacy;

    var icon = '';
    var texticon = ''

    if(privacy == 0){
      icon = 'zmdi zmdi-eye';
    }
    else if(privacy == 1){
      icon = 'zmdi zmdi-lock';
    }

    return(
      <IconButton
        className="btn btn-sm"
      >
        <i className={icon}></i>
      </IconButton>
    )

  }

  renderStatus(){
    const status = this.props.projectData.status;

    var icon = '';
    var texticon = ''

    if(status == 0){
      icon = 'zmdi zmdi-search';
    }
    else if(status == 1){
      icon = 'zmdi zmdi-play';
    }
    else if(status == 2){
      icon = 'zmdi zmdi-check';
    }

    return (
      <Button
        className="btn btn-sm"
      >
        <i className={icon}></i>
      </Button>
    )

  }
  render(){
    return(
      <div className="card">

        <Simple />

        <div className="card-body">

          <div className="row">
            <div className="col-md-8">
              <h3 className="mb-0">{this.props.projectData.title}</h3>
              <p className="sub-heading">{this.props.projectData.description}</p>
            </div>
            <div className="col-md-4">
              <div className="btn-group-mins text-right">
                <Tooltip
                  title={<IntlMessages id="appModule.newProject.privacy" />}
                >
                  {this.renderPrivacy()}
                </Tooltip>
                <Tooltip
                  title={<IntlMessages id="appModule.newProject.status" />}
                >
                {this.renderStatus()}
                </Tooltip>
                <Tooltip
                  title={<IntlMessages id="appModule.newProject.share" />}
                >
                <Button
                  className="btn btn-sm">
                  <i className="zmdi zmdi-share"></i>
                </Button>
                </Tooltip>

              </div>
            </div>
          </div>
        </div>
        <Comments comments={this.props.projectData.comments}/>
      </div>
    );

  }

};

export default Projects;
