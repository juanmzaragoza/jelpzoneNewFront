import {
  FETCH_USER_INFORMATION_BY_ID,
  FETCH_USER_INFORMATION_BY_ID_SUCCESS,
  FETCH_USER_INFORMATION_BY_ID_ERROR,
} from 'constants/ActionTypes';

export const fetchUserInformationById = () => {
  return {
    type: FETCH_USER_INFORMATION_BY_ID
  };
};

export const fetchUserInformationByIdSuccess = (userInformation) => {
  return {
    type: FETCH_USER_INFORMATION_BY_ID_SUCCESS,
    payload: userInformation
  }
};