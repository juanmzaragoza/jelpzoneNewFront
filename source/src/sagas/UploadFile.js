import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { 
    UPLOAD_USER_FILE,
} from 'constants/ActionTypes';

import { 
  uploadUserFileRequest
} from 'apiRequests/File';
import {
  uploadProfilePictureError,
  uploadProfilePictureSuccess
} from 'actions/Image';

import { getItem } from 'util/ApplicationStorage';

function* uploadNewUserFileRequest(action) {

  try {
    const uploadedFile = yield call(uploadUserFileRequest, action.payload);

    if(uploadedFile && uploadedFile.error != undefined){
      yield put(uploadProfilePictureError(uploadedFile.error.message));
    } else{
      yield put(uploadProfilePictureSuccess(uploadedFile));
    }
  } catch (error) {
    console.log("Error on uploadNewUserFileRequest - ",error);
    yield put(uploadProfilePictureError(error));
  }
}

export function* uploadUserFile() {
  yield takeLatest(UPLOAD_USER_FILE, uploadNewUserFileRequest);
}

export default function* rootSaga() {
  yield all([
      fork(uploadUserFile),
  ]);
}
