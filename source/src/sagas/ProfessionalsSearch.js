import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { FETCH_ALL_PROFESSIONS, FETCH_ALL_PROFESSIONALS } from 'constants/ActionTypes';

import { fetchProfessionsSuccess} from 'actions/Professions';
import { fetchProfessionalsSuccess } from 'actions/Professionals';

import { getProfessionsRequest } from 'apiRequests/Professions';
import { getProfessionalsRequest } from 'apiRequests/Professionals';

function* fetchProfessionsRequest() {
    try {
        const fetchedProfessions = yield call(getProfessionsRequest);
        yield put(fetchProfessionsSuccess(fetchedProfessions));
    } catch (error) {
    	console.log(error)
        //yield put(showChatMessage(error));
    }
}

function* fetchProfessionalsRequest() {
    try {
        const fetchedProfessionals = yield call(getProfessionalsRequest);
        yield put(fetchProfessionalsSuccess(fetchedProfessionals));
    } catch (error) {
    	console.log(error)
        yield put(showFetchErrorMessage(error));
    }
}

export function* fetchProfessions() {
    yield takeEvery(FETCH_ALL_PROFESSIONS, fetchProfessionsRequest);
}

export function* fetchProfessionals() {
    yield takeEvery(FETCH_ALL_PROFESSIONALS, fetchProfessionalsRequest);
}

export default function* rootSaga() {
    yield all([fork(fetchProfessions),fork(fetchProfessionals)]);
}