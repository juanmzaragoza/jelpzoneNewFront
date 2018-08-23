import {
  CLEAR_ESTIMATE_REQUEST_FORM,
  CREATE_ESTIMATE_REQUEST,
  CREATE_ESTIMATE_REQUEST_SUCCESS,
  CREATE_ESTIMATE_REQUEST_ERROR,
} from 'constants/ActionTypes';

import generateFormReducer from './AbstractForm';

const INIT_STATE = {
  estimateRequest: {},
  successfulResponse: null,
  loading: false,
  errorMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {

  return generateFormReducer(
    state = INIT_STATE, 
    action, 
    'estimateRequest',
    {
      clear: CLEAR_ESTIMATE_REQUEST_FORM,
      sended: CREATE_ESTIMATE_REQUEST,
      error: CREATE_ESTIMATE_REQUEST_ERROR,
      success: CREATE_ESTIMATE_REQUEST_SUCCESS,
    }
  );

}