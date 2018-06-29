import {
  FETCH_LOGGED_IN_USER_INFORMATION,
  FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS,
  FETCH_LOGGED_IN_USER_INFORMATION_ERROR,
  UPDATE_USER_INFORMATION,
  UPDATE_USER_INFORMATION_SUCCESS,
  UPDATE_USER_INFORMATION_ERROR,
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

export const updateUserInformation = (newUserInformation) => {
  return {
    type: UPDATE_USER_INFORMATION,
    payload: newUserInformation
  }
}

export const updateUserInformationSuccess = (updatedUserInformation) => {
  return {
    type: UPDATE_USER_INFORMATION_SUCCESS,
    payload: updatedUserInformation
  }
}

export const updateUserInformationError = (error) => {
  return {
    type: UPDATE_USER_INFORMATION_ERROR,
    payload: error
  }
}