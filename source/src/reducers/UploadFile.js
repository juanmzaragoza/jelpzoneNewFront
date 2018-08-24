import {
  CLEAR_UPLOAD_USER_FILE,
  UPLOAD_USER_FILE,
  UPLOAD_USER_FILE_ERROR,
  UPLOAD_USER_FILE_SUCCESS
} from 'constants/ActionTypes';

import generateFormReducer from './AbstractForm';

const INIT_STATE = {
  uploadFile: {},
  successfulResponse: null,
  loading: false,
  errorMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {

  return generateFormReducer(
    state = INIT_STATE, 
    action, 
    'uploadFile',
    {
      clear: CLEAR_UPLOAD_USER_FILE,
      sended: UPLOAD_USER_FILE,
      error: UPLOAD_USER_FILE_ERROR,
      success: UPLOAD_USER_FILE_SUCCESS,
    }
  );

}