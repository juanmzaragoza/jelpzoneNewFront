import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Projects from '../Projects';

import {
  fetchDashboardUserProjects as populateProjects,
} from 'actions/Project';

const mapStateToProps = ({projectsList}) => {
  const {
    projects,
    loading,
    errorMessage,
    showMessage
  } = projectsList;
  return {
    projects,
    loading,
    errorMessage,
    showMessage
  }
};

export default connect(mapStateToProps, {
  populateProjects
})(Projects);