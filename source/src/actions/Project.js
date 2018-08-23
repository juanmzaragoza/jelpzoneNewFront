import {
  CLEAR_PROJECT_USER_FORM,
  CREATE_PROJECT_USER,
  CREATE_PROJECT_USER_SUCCESS,
  CREATE_PROJECT_USER_ERROR,
  FETCH_ALL_PROJECT_USER,
  FETCH_ALL_PROJECT_USER_SUCCESS,
  FETCH_ALL_PROJECT_USER_ERROR,
  CLEAR_ESTIMATE_REQUEST_FORM,
  CREATE_ESTIMATE_REQUEST,
  CREATE_ESTIMATE_REQUEST_SUCCESS,
  CREATE_ESTIMATE_REQUEST_ERROR,
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

export const fetchUserProjects = () => {
    return {
        type: FETCH_ALL_PROJECT_USER
    };
};

export const fetchUserProjectsSuccess = (projects) => {
    return {
        type: FETCH_ALL_PROJECT_USER_SUCCESS,
        payload: projects
    }
};

export const fetchUserProjectsError = (error) => {
    return {
        type: FETCH_ALL_PROJECT_USER_ERROR,
        payload: error
    };
};

export const clearEstimateRequestForm = () => {
  return {
    type: CLEAR_ESTIMATE_REQUEST_FORM
  }
}

export const sendEstimateRequest = (newRequest) => {
  return {
    type: CREATE_ESTIMATE_REQUEST,
    payload: newRequest
  }
}

export const sendEstimateRequestSuccess = (createdRequest) => {
  return {
    type: CREATE_ESTIMATE_REQUEST_SUCCESS,
    payload: createdRequest
  }
}

export const sendEstimateRequestError = (error) => {
  return {
    type: CREATE_ESTIMATE_REQUEST_ERROR,
    payload: error
  }
}