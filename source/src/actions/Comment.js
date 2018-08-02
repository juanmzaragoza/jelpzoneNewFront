import {
  ON_SUBMIT_COMMENT,
  ON_SUBMIT_COMMENT_SUCCESS,
  ON_SUBMIT_COMMENT_ERROR,
} from 'constants/ActionTypes';

export const onSubmitComment = (newComment) => {
  return {
    type: ON_SUBMIT_COMMENT,
    payload: newComment
  }
}

export const onSubmitCommentSuccess = (comment) => {
  return {
    type: ON_SUBMIT_COMMENT_SUCCESS,
    payload: comment
  }
}

export const onSubmitCommentError = (error) => {
  return {
    type: ON_SUBMIT_COMMENT_ERROR,
    payload: error
  }
}