import {
  CLEAR_PROJECT_USER_FORM,
  CREATE_PROJECT_USER,
  CREATE_PROJECT_USER_SUCCESS,
  CREATE_PROJECT_USER_ERROR,
} from 'constants/ActionTypes';

export const clearNewProjectForm = () => {
  return {
    type: CLEAR_PROJECT_USER_FORM
  }
}

export const createNewProject = (newProjectInformation) => {
  return {
    type: CREATE_PROJECT_USER,
    payload: newProjectInformation
  }
}

export const createNewProjectSuccess = (newProjectInformation) => {
  return {
    type: CREATE_PROJECT_USER_SUCCESS,
    payload: newProjectInformation
  }
}

export const createNewProjectError = (error) => {
  return {
    type: CREATE_PROJECT_USER_ERROR,
    payload: error
  }
}