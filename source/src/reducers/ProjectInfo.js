import {
  FETCH_PROJECT_INFORMATION_BY_ID,
  FETCH_PROJECT_INFORMATION_BY_ID_SUCCESS,
  FETCH_PROJECT_INFORMATION_BY_ID_ERROR,
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
      sended: FETCH_PROJECT_INFORMATION_BY_ID,
      error: FETCH_PROJECT_INFORMATION_BY_ID_ERROR,
      success: FETCH_PROJECT_INFORMATION_BY_ID_SUCCESS,
    }
  );

}