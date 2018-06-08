import {
  FETCH_ALL_PROFESSIONALS,
  FETCH_ALL_PROFESSIONALS_SUCCESS,
  FETCH_PROFESSIONALS_BY_ID,
  FETCH_PROFESSIONALS_BY_ID_SUCCESS
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

export const fetchProfessionalsById = (id) => {
  return {
    type: FETCH_PROFESSIONALS_BY_ID
  }

}

export const fetchProfessionalsByIdSuccess = (professionals) => {
  return {
    type: FETCH_PROFESSIONALS_BY_ID_SUCCESS,
    payload: professionals
  }

}

export const showFetchErrorMessage = () => {

}
