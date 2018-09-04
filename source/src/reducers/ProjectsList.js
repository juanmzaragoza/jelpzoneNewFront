import {
  FETCH_ALL_PROJECT_USER,
  FETCH_ALL_PROJECT_USER_SUCCESS,
  FETCH_ALL_PROJECT_USER_ERROR,
  FETCH_DASHBOARD_USER_PROJECTS,
  FETCH_DASHBOARD_USER_PROJECTS_SUCCESS,
  FETCH_DASHBOARD_USER_PROJECTS_ERROR
} from 'constants/ActionTypes';

import generateFormReducer from './AbstractFetchInfo';

const INIT_STATE = {
  projects: [],
  loading: false,
  errorMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {

  return generateFormReducer(
    state = generateFormReducer(
      state = INIT_STATE, 
      action, 
      'projects',
      {
        sended: FETCH_ALL_PROJECT_USER,
        error: FETCH_ALL_PROJECT_USER_ERROR,
        success: FETCH_ALL_PROJECT_USER_SUCCESS,
      }
    ),
    action, 
    'projects',
    {
      sended: FETCH_DASHBOARD_USER_PROJECTS,
      error: FETCH_DASHBOARD_USER_PROJECTS_ERROR,
      success: FETCH_DASHBOARD_USER_PROJECTS_SUCCESS,
    }
  )

}