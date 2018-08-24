import {
  CLEAR_UPLOAD_USER_FILE,
  UPLOAD_USER_FILE,
  UPLOAD_USER_FILE_ERROR,
  UPLOAD_USER_FILE_SUCCESS
} from 'constants/ActionTypes';

export const uploadProfilePicture = (file) => {
  return {
    type: UPLOAD_USER_FILE,
    payload: file
  };
};

export const uploadProfilePictureSuccess = (uploadedFile) => {
  return {
    type: UPLOAD_USER_FILE_SUCCESS,
    payload: uploadedFile
  };
};

export const uploadProfilePictureError = (error) => {
  return {
    type: UPLOAD_USER_FILE_ERROR,
    payload: error
  };
};

export const clearPictureUpload = () => {
  return {
    type: CLEAR_UPLOAD_USER_FILE
  }
}