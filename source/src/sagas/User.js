import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { 
    FETCH_LOGGED_IN_USER_INFORMATION,
    UPDATE_USER_INFORMATION,
    FETCH_USER_INFORMATION_BY_ID
} from 'constants/ActionTypes';

import { 
  getUserByIdRequest,
  patchUserInformationRequest 
} from 'apiRequests/User';
import { 
  fetchLoggedInUserInformationSuccess,
  fetchLoggedInUserInformationError,
  updateUserInformationSuccess,
  updateUserInformationError,
  fetchUserInformationByIdSuccess,
  fetchUserInformationByIdError,
} from 'actions/User';

import { getItem } from 'util/ApplicationStorage';

function* fetchUserInformationRequest(action) {
    
  const userId = getItem('user_id');

  try {
    const fetchedUserInformationById = yield call(getUserByIdRequest, userId);
    yield put(fetchLoggedInUserInformationSuccess(fetchedUserInformationById));
  } catch (error) {
    console.log(error);
    yield put(fetchLoggedInUserInformationError(error));
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

function* fetchUserInformationByIdRequest(action) {
    
  const userId = action.payload;

  try {
    const fetchedUserInformationById = yield call(getUserByIdRequest, userId);
    if(fetchedUserInformationById.error){
      yield put(fetchUserInformationByIdError(fetchedUserInformationById.error.message));
    } else{
      yield put(fetchUserInformationByIdSuccess(fetchedUserInformationById));
    }
  } catch (error) {
    console.log(error);
    yield put(fetchUserInformationByIdError(error));
  }
}


export function* fetchUserInformation() {
  yield takeEvery(FETCH_LOGGED_IN_USER_INFORMATION, fetchUserInformationRequest);
}

export function* updateUserInformation() {
  yield takeLatest(UPDATE_USER_INFORMATION, updateUserInformationRequest);
}

export function* fetchUserInformationById() {
  yield takeLatest(FETCH_USER_INFORMATION_BY_ID, fetchUserInformationByIdRequest);
}

export default function* rootSaga() {
  yield all([
      fork(fetchUserInformation),
      fork(updateUserInformation),
      fork(fetchUserInformationById),
  ]);
}
