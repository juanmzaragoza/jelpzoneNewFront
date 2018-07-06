import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { 
    FETCH_ALL_PROFESSIONS, 
    FETCH_ALL_PROFESSIONALS, 
    FETCH_PROFESSIONALS_BY_ID,
    FETCH_PROFESSIONALS_BY_FILTERS 
} from 'constants/ActionTypes';

import { getProfessionsRequest } from 'apiRequests/Professions';
import { fetchProfessionsSuccess} from 'actions/Professions';
import { getProfessionalsRequest } from 'apiRequests/Professionals';
import { fetchProfessionalsSuccess } from 'actions/Professionals';
import { getProfessionalsByIdRequest, getProfessionalsFilterRequest } from 'apiRequests/Professionals';
import { fecthProfessionalsByIdSuccess } from 'actions/Professionals';

function* fetchProfessionsRequest() {
    try {
        const fetchedProfessions = yield call(getProfessionsRequest);
        yield put(fetchProfessionsSuccess(fetchedProfessions));
    } catch (error) {
      console.log(error)
      yield put(showFetchErrorMessage(error));
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


function* fetchProfessionalsByIdRequest(id) {
    
    console.log(id);
    
    try {
        const fetchedProfessionalsById = yield call(getProfessionalsByIdRequest, id);
        yield put(fetchProfessionalsByIdSuccess(fetchedProfessionalsById));
    } catch (error) {
      console.log(error)
        yield put(showFetchErrorMessage(error));
    }
}

function* getProfessionalsByFiltersRequest(action) { 
    try { 
      const fetchedProfessionals = yield call(getProfessionalsFilterRequest, action.filters); 
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

export function* fetchProfessionalsById() {
    yield takeEvery(FETCH_PROFESSIONALS_BY_ID, getProfessionalsByIdRequest);
}

export function* fetchProfessionalsByFilters() { 
    yield takeEvery(FETCH_PROFESSIONALS_BY_FILTERS, getProfessionalsByFiltersRequest); 
} 

export default function* rootSaga() {
    yield all([ 
        fork(fetchProfessions), 
        fork(fetchProfessionals),  
        fork(fetchProfessionalsById), 
        fork(fetchProfessionalsByFilters), 
    ]); 
}
