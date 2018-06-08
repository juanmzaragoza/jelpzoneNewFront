import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Pages = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/about-us`}/>
            <Route path={`${match.url}/about-us`} component={asyncComponent(() => import('./routes/aboutUs'))}/>
            <Route path={`${match.url}/faq`} component={asyncComponent(() => import('./routes/faq'))}/>
            <Route path={`${match.url}/portfolio`} component={asyncComponent(() => import('./routes/portfolio'))}/>
        </Switch>
    </div>
);

export default Pages;
