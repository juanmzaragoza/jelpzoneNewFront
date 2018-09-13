import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Project from '../Project';

import {
  fetchProjectInformationById as populateProject,
} from 'actions/Project';

class ProjectInfoWrapper extends Component {
  render(){
    return(
      <div className="app-wrapper">
        <Project {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = ({projectInfo}, ownProps) => {
  const {
    information,
    loading,
    errorMessage,
    showMessage
  } = projectInfo;
  return {
    projectData: information,
    projectId: ownProps.match.params.projectId,
    loading,
    errorMessage,
    showMessage
  }
};

export default connect(mapStateToProps, {
  populateProject
})(ProjectInfoWrapper);