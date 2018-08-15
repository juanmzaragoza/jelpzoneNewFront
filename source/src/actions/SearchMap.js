import {
  ON_CHANGE_RADIUS,
} from 'constants/ActionTypes';

export const changeDistanceRadius = ( distance ) => {
  return {
    type: ON_CHANGE_RADIUS,
    payload: distance
  }
}