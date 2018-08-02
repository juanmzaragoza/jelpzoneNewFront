import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { 
    FETCH_ALL_PROJECT_USER,
    CREATE_PROJECT_USER,
    ON_SUBMIT_COMMENT,
} from 'constants/ActionTypes';

import { 
  getProjectsByUserIdRequest,
  postNewProjectRequest,
  postNewCommentRequest,
} from 'apiRequests/Project';
import { 
  createNewProjectSuccess,
  createNewProjectError,
  fetchUserProjectsSuccess,
  fetchUserProjectsError
} from 'actions/Project';
import { 
  onSubmitCommentSuccess,
  onSubmitCommentError,
} from 'actions/Comment';

import { getItem } from 'util/ApplicationStorage';

function* fetchProjectListRequest(action) {
    
  const userId = getItem('user_id');

  try {
    const fetchedProjectsList = yield call(getProjectsByUserIdRequest, userId);
    yield put(fetchUserProjectsSuccess(fetchedProjectsList));
  } catch (error) {
    console.log(error);
    yield put(fetchUserProjectsError(error));
  }
}

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

    if(newProjectInformation && newProjectInformation.error != undefined){
      yield put(createNewProjectError(newProjectInformation.error.message));
    } else{
      yield put(createNewProjectSuccess(newProjectInformation));
    }
  } catch (error) {
    console.log("Error on createNewProjectRequest - ",error);
    yield put(createNewProjectError(error));
  }
}

function* createNewCommentRequest(action) {

  const userId = getItem('user_id');

  try {
    const newComment = yield call(postNewCommentRequest, userId, action.payload);

    if(newComment && newComment.error != undefined){
      yield put(onSubmitCommentError(newComment.error.message));
    } else{
      yield put(onSubmitCommentSuccess(newComment));
    }
  } catch (error) {
    console.log("Error on createNewCommentRequest - ",error);
    yield put(onSubmitCommentError(error));
  }
}


export function* fetchProjectsList() {
  yield takeEvery(FETCH_ALL_PROJECT_USER, fetchProjectListRequest);
}

export function* createNewProject() {
  yield takeLatest(CREATE_PROJECT_USER, createNewProjectRequest);
}

export function* createNewComment() {
  yield takeLatest(ON_SUBMIT_COMMENT, createNewCommentRequest);
}

export default function* rootSaga() {
  yield all([
      fork(fetchProjectsList),
      fork(createNewProject),
      fork(createNewComment),
  ]);
}
