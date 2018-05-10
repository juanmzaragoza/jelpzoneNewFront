import {
  FETCH_ALL_PROFESSIONS,
  FETCH_ALL_PROFESSIONS_SUCCESS,
  FETCH_ALL_PROFESSIONALS,
  FETCH_ALL_PROFESSIONALS_SUCCESS
} from 'constants/ActionTypes';

const INIT_STATE = {
  allProfessions: [],
  allProfessionals: [],
  loader: false,
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
        default:
            return state;
    }
}
