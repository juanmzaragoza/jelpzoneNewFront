import {
  FETCH_LOGGED_IN_USER_INFORMATION,
  FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS,
  FETCH_LOGGED_IN_USER_INFORMATION_ERROR,
  UPDATE_USER_INFORMATION,
  UPDATE_USER_INFORMATION_SUCCESS,
  UPDATE_USER_INFORMATION_ERROR,
  FETCH_USER_INFORMATION_BY_ID,
  FETCH_USER_INFORMATION_BY_ID_SUCCESS,
  FETCH_USER_INFORMATION_BY_ID_ERROR,
} from 'constants/ActionTypes';

import {
  fireAction,
  fireActionPayload
} from './AbstractAction'

export const fetchUserInformationById = fireActionPayload(FETCH_USER_INFORMATION_BY_ID);
export const fetchUserInformationByIdSuccess = fireActionPayload(FETCH_USER_INFORMATION_BY_ID_SUCCESS);
export const fetchUserInformationByIdError = fireActionPayload(FETCH_USER_INFORMATION_BY_ID_ERROR);

export const fetchLoggedInUserInformation = fireAction(FETCH_LOGGED_IN_USER_INFORMATION);
export const fetchLoggedInUserInformationSuccess = fireActionPayload(FETCH_LOGGED_IN_USER_INFORMATION_SUCCESS);
export const fetchLoggedInUserInformationError = fireActionPayload(FETCH_LOGGED_IN_USER_INFORMATION_ERROR);

export const updateUserInformation = fireActionPayload(UPDATE_USER_INFORMATION);
export const updateUserInformationSuccess = fireActionPayload(UPDATE_USER_INFORMATION_SUCCESS);
export const updateUserInformationError = fireActionPayload(UPDATE_USER_INFORMATION_ERROR);