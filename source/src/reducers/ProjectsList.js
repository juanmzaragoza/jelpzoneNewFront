import {
  FETCH_ALL_PROJECT_USER,
  FETCH_ALL_PROJECT_USER_SUCCESS,
  FETCH_ALL_PROJECT_USER_ERROR,
} from 'constants/ActionTypes';

const INIT_STATE = {
  projects: [],
  loading: false,
  errorMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_PROJECT_USER: {
      return {
        ...state,
        errorMessage: '',
        loading: true,
        showMessage: false
      }
    }
    case FETCH_ALL_PROJECT_USER_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        showMessage: true
      }
    }
    case FETCH_ALL_PROJECT_USER_SUCCESS: {
      return {
        ...state,
        projects: action.payload,
        loading: false,
        showMessage: false,
      }
    }
    default:
      return state;
  }
}