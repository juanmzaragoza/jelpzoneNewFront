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
  FETCH_DASHBOARD_USER_PROJECTS,
  FETCH_DASHBOARD_USER_PROJECTS_SUCCESS,
  FETCH_DASHBOARD_USER_PROJECTS_ERROR,
  FETCH_PROJECT_INFORMATION_BY_ID,
  FETCH_PROJECT_INFORMATION_BY_ID_SUCCESS,
  FETCH_PROJECT_INFORMATION_BY_ID_ERROR,
} from 'constants/ActionTypes';

import {
  fireAction,
  fireActionPayload
} from './AbstractAction'

export const clearNewProjectForm = fireAction(CLEAR_PROJECT_USER_FORM);
export const createNewProject = fireActionPayload(CREATE_PROJECT_USER);
export const createNewProjectSuccess = fireActionPayload(CREATE_PROJECT_USER_SUCCESS);
export const createNewProjectError = fireActionPayload(CREATE_PROJECT_USER_ERROR);

export const fetchUserProjects = fireAction(FETCH_ALL_PROJECT_USER);
export const fetchUserProjectsSuccess = fireActionPayload(FETCH_ALL_PROJECT_USER_SUCCESS);
export const fetchUserProjectsError = fireActionPayload(FETCH_ALL_PROJECT_USER_ERROR);

export const clearEstimateRequestForm = fireAction(CLEAR_ESTIMATE_REQUEST_FORM);
export const sendEstimateRequest = fireActionPayload(CREATE_ESTIMATE_REQUEST);
export const sendEstimateRequestSuccess = fireActionPayload(CREATE_ESTIMATE_REQUEST_SUCCESS);
export const sendEstimateRequestError = fireActionPayload(CREATE_ESTIMATE_REQUEST_SUCCESS);

export const fetchDashboardUserProjects = fireAction(FETCH_DASHBOARD_USER_PROJECTS);
export const fetchDashboardUserProjectsSuccess = fireActionPayload(FETCH_DASHBOARD_USER_PROJECTS_SUCCESS);
export const fetchDashboardUserProjectsError = fireActionPayload(FETCH_DASHBOARD_USER_PROJECTS_ERROR);

export const fetchProjectInformationById = fireActionPayload(FETCH_PROJECT_INFORMATION_BY_ID);
export const fetchProjectInformationByIdSuccess = fireActionPayload(FETCH_PROJECT_INFORMATION_BY_ID_SUCCESS);
export const fetchProjectInformationByIdError = fireActionPayload(FETCH_PROJECT_INFORMATION_BY_ID_ERROR);