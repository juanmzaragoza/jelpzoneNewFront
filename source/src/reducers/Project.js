import {
  CREATE_PROJECT_USER,
  CREATE_PROJECT_USER_SUCCESS,
  CREATE_PROJECT_USER_ERROR,
} from 'constants/ActionTypes';

const INIT_STATE = {
  projectInformation: {},
  loading: false,
  errorMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_PROJECT_USER: {
      return {
        ...state,
        projectInformation: action.payload,
        errorMessage: '',
        loading: true,
        showMessage: false
      }
    }
    case CREATE_PROJECT_USER_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        showMessage: true
      }
    }
    case CREATE_PROJECT_USER_SUCCESS: {
      return {
        ...state,
        projectInformation: action.payload,
        loading: false,
      }
    }
    default:
      return state;
  }
}