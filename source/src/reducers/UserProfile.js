import {
  FETCH_USER_INFORMATION_BY_ID,
  FETCH_USER_INFORMATION_BY_ID_SUCCESS,
  FETCH_USER_INFORMATION_BY_ID_ERROR,
} from 'constants/ActionTypes';

import generateFormReducer from './AbstractFetchInfo';

const INIT_STATE = {
  information: {},
  loading: false,
  errorMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {

  return generateFormReducer(
    state = INIT_STATE, 
    action, 
    'information',
    {
      sended: FETCH_USER_INFORMATION_BY_ID,
      error: FETCH_USER_INFORMATION_BY_ID_ERROR,
      success: FETCH_USER_INFORMATION_BY_ID_SUCCESS,
    }
  );

}