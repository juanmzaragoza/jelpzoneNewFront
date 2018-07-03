import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {
    auth,
    facebookAuthProvider,
    googleAuthProvider,
    twitterAuthProvider
} from 'firebase/firebase';
import {
    SIGNIN_FACEBOOK_USER,
    SIGNIN_GOOGLE_USER,
    SIGNIN_TWITTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER
} from 'constants/ActionTypes';
import {showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess} from 'actions/Auth';
import {
    userFacebookSignInSuccess,
    userGoogleSignInSuccess,
    userTwitterSignInSuccess
} from '../actions/Auth';

import {
    getUserByIdRequest,
    signInUserWithEmailPasswordRequest,
    createUserWithEmailPasswordRequest
} from 'apiRequests/User';

import { setItem, removeItem } from 'util/ApplicationStorage';

const signOutRequest = async () =>
    await  auth.signOut()
        .then(authUser => authUser)
        .catch(error => error);


function* createUserWithEmailPassword({payload}) {
    try {
        const signUpUser = yield call(createUserWithEmailPasswordRequest, payload);
        if (signUpUser.error) {
            yield put(showAuthMessage(signUpUser.error.message));
        } else {
            setItem('user_id', signUpUser.id);
            yield put(userSignUpSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

const signInUserWithGoogleRequest = async () =>
    await  auth.signInWithPopup(googleAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithFacebookRequest = async () =>
    await  auth.signInWithPopup(facebookAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithTwitterRequest = async () =>
    await  auth.signInWithPopup(twitterAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);


function* signInUserWithGoogle() {
    try {
        const signUpUser = yield call(signInUserWithGoogleRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            setItem('user_id', signUpUser.uid);
            yield put(userGoogleSignInSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithFacebook() {
    try {
        const signUpUser = yield call(signInUserWithFacebookRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            setItem('user_id', signUpUser.uid);
            yield put(userFacebookSignInSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signInUserWithTwitter() {
    try {
        const signUpUser = yield call(signInUserWithTwitterRequest);
        if (signUpUser.message) {
            if (signUpUser.message.length > 100) {
                yield put(showAuthMessage('Your request has been canceled.'));
            } else {
                yield put(showAuthMessage(signUpUser.message));
            }
        } else {
            setItem('user_id', signUpUser.uid);
            yield put(userTwitterSignInSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signInUserWithEmailPassword({payload}) {
    const {email, password} = payload;
    try {
        const signInUser = yield call(signInUserWithEmailPasswordRequest, {'username': email, 'password': password});
        if (signInUser.error) {
            yield put(showAuthMessage(signInUser.error.message));
        } else {
            console.log(signInUser);
            
            // save token on memory
            setItem('token', signInUser.id);
            setItem('user_id', signInUser.userId);

            yield put(userSignInSuccess(signInUser));
            const signedInUser = yield call(getUserByIdRequest, signInUser.userId, signInUser.id);
            if(signedInUser.error) {
              yield put(showAuthMessage(signedInUser.error.message));
            }else{
              setItem('user_name', signedInUser.username);
              setItem('email', signedInUser.email);
              setItem('first_name', signedInUser.firstName);
              setItem('last_name', signedInUser.lastName);
              setItem('birthday', signedInUser.birthday);
              console.log(signedInUser);

            }
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signOut() {
    try {
        const signOutUser = yield call(signOutRequest);
        if (signInUser.message) {
            yield put(showAuthMessage(signInUser.message));
        } else {
            removeItem('user_id');
            removeItem('user_name');
            removeItem('email');
            removeItem('first_name');
            removeItem('last_name');
            removeItem('birthday');
            yield put(userSignOutSuccess(signInUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInWithGoogle() {
    yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
}

export function* signInWithFacebook() {
    yield takeEvery(SIGNIN_FACEBOOK_USER, signInUserWithFacebook);
}

export function* signInWithTwitter() {
    yield takeEvery(SIGNIN_TWITTER_USER, signInUserWithTwitter);
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
    yield all([fork(signInUser),
        fork(createUserAccount),
        fork(signInWithGoogle),
        fork(signInWithFacebook),
        fork(signInWithTwitter),
        fork(signOutUser)]);
}
