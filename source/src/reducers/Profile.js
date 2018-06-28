import {
  FETCH_LOGGED_IN_USER_INFORMATION,
  FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS,
  FETCH_LOGGED_IN_USER_INFORMATION_ERROR,
} from 'constants/ActionTypes';

const INIT_STATE = {
  information: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS: {
      return {
        ...state,
        information: action.payload
      }
    }
    default:
      return state;
  }
}