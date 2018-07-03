import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const ProfessionalSearch = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`}/>
            <Route path={`${match.url}/default`} component={asyncComponent(() => import('./routes/Index'))}/>
            <Route path={`${match.url}/map/:hashedIds/:distance`} component={asyncComponent(() => import('./routes/ResultsMap'))}/>
        </Switch>
    </div>
);

export default ProfessionalSearch;