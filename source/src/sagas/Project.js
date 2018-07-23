import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { 
    //FETCH_LOGGED_IN_USER_INFORMATION,
    CREATE_PROJECT_USER
} from 'constants/ActionTypes';

import { 
  //getUserByIdRequest,
  postNewProjectRequest 
} from 'apiRequests/Project';
import { 
  createNewProjectSuccess,
  createNewProjectError
} from 'actions/Project';

import { getItem } from 'util/ApplicationStorage';

/*function* fetchUserInformationRequest(action) {
    
  const userId = getItem('user_id');

  try {
    const fetchedUserInformationById = yield call(getUserByIdRequest, userId);
    yield put(fetchUserInformationByIdSuccess(fetchedUserInformationById));
  } catch (error) {
    console.log(error);
    yield put(showFetchErrorMessage(error));
  }
}*/

function* createNewProjectRequest(action) {

  const userId = getItem('user_id');

  // TODO: complete this information with the real value !!!
  const userInformation = Object.assign(action.payload, {}, {
    authorId: userId,
    professionalId: userId,
    clientId: userId,
    extUserId: userId,
  })

  try {
    const newProjectInformation = yield call(postNewProjectRequest, userInformation);
    if(newProjectInformation.error != undefined){
      yield put(createNewProjectError(newProjectInformation.error.message));
    } else{
      yield put(createNewProjectSuccess(newProjectInformation));
    }
  } catch (error) {
    console.log("das",error);
    yield put(createNewProjectError(error));
  }
}


/*export function* fetchUserInformation() {
  yield takeEvery(FETCH_LOGGED_IN_USER_INFORMATION, fetchUserInformationRequest);
}*/

export function* createNewProject() {
  yield takeLatest(CREATE_PROJECT_USER, createNewProjectRequest);
}

export default function* rootSaga() {
  yield all([
      //fork(fetchUserInformation),
      fork(createNewProject),
  ]);
}
