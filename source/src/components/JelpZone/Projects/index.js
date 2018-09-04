import React, {Component} from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Menu, {MenuItem} from 'material-ui/Menu';
import {CircularProgress} from 'material-ui/Progress';
import _ from 'lodash';

import Simple from 'components/JelpZone/carousel/simple';
import Comments from 'components/JelpZone/Comments';

import Project from 'components/JelpZone/Project';

import IntlMessages from 'util/IntlMessages';

class Projects extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount = () => {
    if(this.props.populateProjects) {
      this.props.populateProjects();
    }
  }

  render(){
    return (
      <div className="app-wrapper">
        {this.props.loading?
          <div className="animated d-flex justify-content-center slideInUpTiny animation-duration-3">
            <CircularProgress size={80}/>
          </div>
          :
          null
        }
        {this.props.projects?
          <div className="animated slideInUpTiny animation-duration-3">
          {this.props.projects.map((project, index) => { return <Project key={index} projectData={project} />; })}
          </div>
          :
          null
        }
      </div>
    );
  }

}

export default Projects;
