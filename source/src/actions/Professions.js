import {
  FETCH_ALL_PROFESSIONS,
  FETCH_ALL_PROFESSIONS_SUCCESS
} from 'constants/ActionTypes';

export const fetchProfessions = () => {
  return {
    type: FETCH_ALL_PROFESSIONS
  };
};

export const fetchProfessionsSuccess = (professions) => {
  return {
    type: FETCH_ALL_PROFESSIONS_SUCCESS,
    payload: professions
  }
};