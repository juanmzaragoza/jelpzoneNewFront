import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const ProfessionalSearch = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            {/*<Redirect exact from={`${match.url}/`} to={`${match.url}/default`}/>*/}
            <Route exact path={`${match.url}/`} component={asyncComponent(() => import('./routes/MyProfile'))}/>
            <Route exact path={`${match.url}/:userId`} component={asyncComponent(() => import('./routes/UserProfile'))}/>
        </Switch>
    </div>
);

export default ProfessionalSearch;