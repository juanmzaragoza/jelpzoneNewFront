import {
  FETCH_LOGGED_IN_USER_INFORMATION,
  FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS,
  FETCH_LOGGED_IN_USER_INFORMATION_ERROR,
} from 'constants/ActionTypes';

export const fetchLoggedInUserInformation = () => {
  return {
    type: FETCH_LOGGED_IN_USER_INFORMATION
  };
};

export const fetchUserInformationByIdSuccess = (userInformation) => {
  return {
    type: FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS,
    payload: userInformation
  }
};