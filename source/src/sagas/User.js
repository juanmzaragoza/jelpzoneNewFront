import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { 
    FETCH_LOGGED_IN_USER_INFORMATION,
} from 'constants/ActionTypes';

import { getUserByIdRequest } from 'apiRequests/User';
import { fetchUserInformationByIdSuccess } from 'actions/User';

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


export function* fetchUserInformation() {
  yield takeEvery(FETCH_LOGGED_IN_USER_INFORMATION, fetchUserInformationRequest);
}

export default function* rootSaga() {
  yield all([
      fork(fetchUserInformation),
  ]);
}
