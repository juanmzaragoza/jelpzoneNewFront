import React, {Component} from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import Menu, {MenuItem} from 'material-ui/Menu';
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
      <div>
        {this.props.projects?
          this.props.projects.map((project, index) => <Project key={index} projectData={project} />)
          :
          null
        }
      </div>
    );
  }

}

export default Projects;
