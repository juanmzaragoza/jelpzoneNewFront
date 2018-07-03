import {
  FETCH_ALL_PROFESSIONALS,
  FETCH_ALL_PROFESSIONALS_SUCCESS,
  FETCH_PROFESSIONALS_BY_ID,
  FETCH_PROFESSIONALS_BY_ID_SUCCESS,
  FETCH_PROFESSIONALS_BY_FILTERS
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
    type: FETCH_PROFESSIONALS_BY_ID,
    id
  }
}

/*
 * Find filter by some filters
 *
 * location
 * distance
 * professions
 *
 */
export const fetchProfessionalsByFilters = (filters) => {
  return {
    type: FETCH_PROFESSIONALS_BY_FILTERS,
    filters
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
