import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { 
    FETCH_USER_INFORMATION_BY_ID,
} from 'constants/ActionTypes';

import { getUserByIdRequest } from 'apiRequests/User';
import { fetchUserInformationByIdSuccess } from 'actions/Professionals';


function* fetchUserInformationByIdRequest(id) {
    
    console.log(id);
    
    try {
      const fetchedUserInformationById = yield call(getUserByIdRequest, id);
      yield put(fetchUserInformationByIdSuccess(fetchedUserInformationById));
    } catch (error) {
      console.log(error);
      yield put(showFetchErrorMessage(error));
    }
}


export function* fetchUserInformationById() {
    yield takeEvery(FETCH_USER_INFORMATION_BY_ID, fetchUserInformationByIdRequest);
}

export default function* rootSaga() {
    yield all([
        fork(fetchUserInformationById),
    ]);
}
