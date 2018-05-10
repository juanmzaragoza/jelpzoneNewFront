import {
  FETCH_ALL_PROFESSIONALS,
  FETCH_ALL_PROFESSIONALS_SUCCESS
} from 'constants/ActionTypes';

export const fetchProfessionals = () => {
  return {
    type: FETCH_ALL_PROFESSIONALS
  };
};

export const fetchProfessionalsSuccess = (professionals) => {
  return {
    type: FETCH_ALL_PROFESSIONALS_SUCCESS,
    payload: professionals
  }
};

export const showFetchErrorMessage = () => {
	
}