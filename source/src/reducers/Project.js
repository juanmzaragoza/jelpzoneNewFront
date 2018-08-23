import {
  CLEAR_PROJECT_USER_FORM,
  CREATE_PROJECT_USER,
  CREATE_PROJECT_USER_SUCCESS,
  CREATE_PROJECT_USER_ERROR,
} from 'constants/ActionTypes';

import generateFormReducer from './AbstractForm';

const INIT_STATE = {
  projectInformation: {},
  successfulResponse: null,
  loading: false,
  errorMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {

  return generateFormReducer(
    state = INIT_STATE, 
    action, 
    'projectInformation',
    {
      clear: CLEAR_PROJECT_USER_FORM,
      sended: CREATE_PROJECT_USER,
      error: CREATE_PROJECT_USER_ERROR,
      success: CREATE_PROJECT_USER_SUCCESS,
    }
  );

}