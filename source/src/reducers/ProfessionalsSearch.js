import {
  FETCH_ALL_PROFESSIONS,
  FETCH_ALL_PROFESSIONS_SUCCESS,
  FETCH_ALL_PROFESSIONALS,
  FETCH_ALL_PROFESSIONALS_SUCCESS,
  FETCH_PROFESSIONALS_BY_ID,
  FETCH_PROFESSIONALS_BY_ID_SUCCESS,
  ON_CHANGE_RADIUS,
  ON_CHANGE_SELECTED_PROFESSION
} from 'constants/ActionTypes';

const INIT_STATE = {
  allProfessions: [],
  allProfessionals: [],
  loader: false,
  filterDistance: 5, // km
  filterProfessionId: null
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_PROFESSIONS_SUCCESS: {
      return {
        ...state,
        loader: false,
        allProfessions: action.payload
      }
    }
    case FETCH_ALL_PROFESSIONALS_SUCCESS: {
      return {
        ...state,
        loader: false,
        allProfessionals: action.payload
      }
    }
    case FETCH_PROFESSIONALS_BY_ID_SUCCESS: {
      return {
        ...state,
        loader: false,
        allProfessions: action.payload
      }
    }
    case ON_CHANGE_RADIUS: {
      return {
        ...state,
        filterDistance: action.payload
      }
    }
    case ON_CHANGE_SELECTED_PROFESSION: {
      return {
        ...state,
        filterProfessionId: action.payload
      }
    }
    default:
      return state;
  }
}
