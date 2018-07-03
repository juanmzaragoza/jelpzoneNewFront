import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { 
    FETCH_LOGGED_IN_USER_INFORMATION,
    UPDATE_USER_INFORMATION
} from 'constants/ActionTypes';

import { 
  getUserByIdRequest,
  patchUserInformationRequest 
} from 'apiRequests/User';
import { 
  fetchUserInformationByIdSuccess,
  updateUserInformationSuccess,
  updateUserInformationError
} from 'actions/User';

import { getItem } from 'util/ApplicationStorage';

function* fetchUserInformationRequest(action) {
    
  const userId = getItem('user_id');

  try {
    const fetchedUserInformationById = yield call(getUserByIdRequest, userId);
    yield put(fetchUserInformationByIdSuccess(fetchedUserInformationById));
  } catch (error) {
    console.log(error);
    yield put(showFetchErrorMessage(error));
  }
}

function* updateUserInformationRequest(action) {

  const userId = getItem('user_id');

  if(action.payload.password && action.payload.password != action.payload.confirmPassword){
    yield put(updateUserInformationError("Passwords must match"));
  } else{
    try {
      const updatedUserInformation = yield call(patchUserInformationRequest, userId, action.payload);
      yield put(updateUserInformationSuccess(updatedUserInformation));
    } catch (error) {
      console.log(error);
      yield put(updateUserInformationError(error));
    }

  }
}


export function* fetchUserInformation() {
  yield takeEvery(FETCH_LOGGED_IN_USER_INFORMATION, fetchUserInformationRequest);
}

export function* updateUserInformation() {
  yield takeLatest(UPDATE_USER_INFORMATION, updateUserInformationRequest);
}

export default function* rootSaga() {
  yield all([
      fork(fetchUserInformation),
      fork(updateUserInformation),
  ]);
}
