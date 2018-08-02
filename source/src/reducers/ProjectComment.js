import {
  ON_SUBMIT_COMMENT,
  ON_SUBMIT_COMMENT_SUCCESS,
  ON_SUBMIT_COMMENT_ERROR,
} from 'constants/ActionTypes';

const INIT_STATE = {
  commentInformation: null,
  successfulComment: null,
  loading: false,
  errorMessage: '',
  showMessage: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ON_SUBMIT_COMMENT: {
      return {
        ...state,
        commentInformation: action.payload,
        errorMessage: '',
        loading: true,
        showMessage: false
      }
    }
    case ON_SUBMIT_COMMENT_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false,
        showMessage: true
      }
    }
    case ON_SUBMIT_COMMENT_SUCCESS: {
      return {
        ...state,
        successfulComment: action.payload,
        loading: false,
      }
    }
    default:
      return state;
  }
}