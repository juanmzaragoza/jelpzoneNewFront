import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import Settings from './Settings';
import ChatData from './Chat';
import Contact from './Contact';
import Mail from './Mail';
import ToDo from './ToDo';
import Auth from './Auth';
import ProfessionalsSearch from './ProfessionalsSearch';
import Profile from './Profile';
import Project from './Project';


const reducers = combineReducers({
    routing: routerReducer,
    settings: Settings,
    chatData: ChatData,
    contacts: Contact,
    mail: Mail,
    toDo: ToDo,
    auth: Auth,
    professionalsSearch: ProfessionalsSearch,
    profile: Profile,
    project: Project,
});

export default reducers;
