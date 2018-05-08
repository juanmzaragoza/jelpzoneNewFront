import {
  FETCH_ALL_PROFESSIONS,
  FETCH_ALL_PROFESSIONS_SUCCESS
} from 'constants/ActionTypes';

const INIT_STATE = {
  allProfessions: [],
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
        default:
            return state;
    }
}
