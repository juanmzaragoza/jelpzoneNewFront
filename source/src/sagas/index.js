import {all} from 'redux-saga/effects';
import mailSagas from './Mail';
import toDoSagas from './Todo';
import contactSagas from './Contact';
import chatSagas from './Chat';
import authSagas from './Auth';
import professionalsSearch from './ProfessionalsSearch';
import userSagas from './User';
import projectSagas from './Project';

export default function* rootSaga(getState) {
    yield all([
        mailSagas(),
        toDoSagas(),
        contactSagas(),
        chatSagas(),
        authSagas(),
        professionalsSearch(),
        userSagas(),
        projectSagas()
    ]);
}
