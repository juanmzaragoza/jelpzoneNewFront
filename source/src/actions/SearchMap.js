import {
  ON_CHANGE_RADIUS,
  ON_CHANGE_SELECTED_PROFESSION
} from 'constants/ActionTypes';

export const changeDistanceRadius = ( distance ) => {
  return {
    type: ON_CHANGE_RADIUS,
    payload: distance
  }
}

export const changeProfession = ( professionId ) => {
  return {
    type: ON_CHANGE_SELECTED_PROFESSION,
    payload: professionId
  }
}