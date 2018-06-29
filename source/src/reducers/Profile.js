import {
  FETCH_LOGGED_IN_USER_INFORMATION,
  FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS,
  FETCH_LOGGED_IN_USER_INFORMATION_ERROR,
  UPDATE_USER_INFORMATION,
  UPDATE_USER_INFORMATION_SUCCESS,
  UPDATE_USER_INFORMATION_ERROR,
} from 'constants/ActionTypes';

const INIT_STATE = {
  information: {},
  loading: false,
  alertMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_LOGGED_IN_USER_INFORMATION: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS: {
      return {
        ...state,
        information: action.payload,
        loading: false
      }
    }
    case UPDATE_USER_INFORMATION: {
      return {
        ...state,
        information: action.payload,
        loading: true,
        showMessage: false
      }
    }
    case UPDATE_USER_INFORMATION_ERROR: {
      return {
        ...state,
        alertMessage: action.payload,
        loading: false,
        showMessage: true
      }
    }
    case UPDATE_USER_INFORMATION_SUCCESS: {
      return {
        ...state,
        information: action.payload,
        loading: false
      }
    }
    default:
      return state;
  }
}