import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { 
    FETCH_ALL_PROFESSIONS, 
    FETCH_ALL_PROFESSIONALS, 
    FETCH_PROFESSIONALS_BY_ID,
    FETCH_PROFESSIONALS_BY_FILTERS,
    CREATE_ESTIMATE_REQUEST
} from 'constants/ActionTypes';

import { getItem } from 'util/ApplicationStorage';

import { postBasicProjectRequest } from 'apiRequests/Project';
import { getProfessionsRequest } from 'apiRequests/Professions';
import { fetchProfessionsSuccess} from 'actions/Professions';

import { 
  getProfessionalsByIdRequest, 
  getProfessionalsFilterRequest, 
  getProfessionalsRequest 
} from 'apiRequests/Professionals';
import { 
  fetchProfessionalsSuccess,
  fecthProfessionalsByIdSuccess 
} from 'actions/Professionals';

import { postNewEstimateRequestRequest } from 'apiRequests/EstimateRequest';
import {
  sendEstimateRequestSuccess,
  sendEstimateRequestError
} from 'actions/Project';

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

function* createNewEstimateRequestRequest(action) {

  const params = Object.assign({},action.payload,{
    userId: getItem('user_id')
  })

  try {

    if(params.projectId){

      yield doRequest(params);

    } else{
      // first create project
      let newProject = yield call(postBasicProjectRequest, {
        title: params.newProjectName,
        description: 'No description',
        authorId: params.userId,
        clientId: params.userId,
        extUserId: params.userId,
      });

      yield doRequest(Object.assign({},params,{
        projectId: newProject.id
      }));

    }
  } catch (error) {
    console.log("Error on postNewEstimateRequestRequest - ",error);
    yield put(sendEstimateRequestError(error));
  }
}

function* doRequest(params){

  const newEstimateRequest = yield call(postNewEstimateRequestRequest, params);

  if(newEstimateRequest && newEstimateRequest.error != undefined){
    yield put(sendEstimateRequestError(newEstimateRequest.error.message));
  } else{
    yield put(sendEstimateRequestSuccess(newEstimateRequest));
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

export function* createNewEstimateRequest() {
  yield takeLatest(CREATE_ESTIMATE_REQUEST, createNewEstimateRequestRequest);
}

export default function* rootSaga() {
    yield all([ 
        fork(fetchProfessions), 
        fork(fetchProfessionals),  
        fork(fetchProfessionalsById), 
        fork(fetchProfessionalsByFilters),
        fork(createNewEstimateRequest)
    ]); 
}
