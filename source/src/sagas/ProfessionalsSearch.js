import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { FETCH_ALL_PROFESSIONS } from 'constants/ActionTypes';
import { fetchProfessionsSuccess } from 'actions/Professions';
import { 
    getProfessionsRequest
} from 'apiRequests/Professions';

function* fetchProfessionsRequest() {
    try {
        const fetchedProfessions = yield call(getProfessionsRequest);
        yield put(fetchProfessionsSuccess(fetchedProfessions));
    } catch (error) {
    	console.log(error)
        //yield put(showChatMessage(error));
    }
}

export function* fetchProfessions() {
    yield takeEvery(FETCH_ALL_PROFESSIONS, fetchProfessionsRequest);
}

export default function* rootSaga() {
    yield all([fork(fetchProfessions)]);
}