import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss'
import 'styles/app.scss';
import defaultTheme from './themes/defaultTheme';
import AppLocale from '../languageProvider';

import MainApp from 'app/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {setInitUrl} from '../actions/Auth';

const RestrictedRoute = ({component: Component, ...rest, authUser}) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/signin',
                        state: {from: props.location}
                    }}
                />}
    />;

class App extends Component {

    render() {
        const {match, location, locale, authUser, initURL} = this.props;
        if (location.pathname === '/') {
            if (authUser === null) {
                return ( <Redirect to={'/signin'}/> );
            } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
                return ( <Redirect to={'/app/sample-page'}/> );
            } else {
                return ( <Redirect to={initURL}/> );
            }
        }

        console.log('connecting with ');
        const currentAppLocale = AppLocale[locale.locale];
        return (
            <MuiThemeProvider theme={createMuiTheme(defaultTheme)}>
                <IntlProvider
                    locale={currentAppLocale.locale}
                    messages={currentAppLocale.messages}
                >
                    <div className="app-main">
                        <RestrictedRoute path={`${match.url}app`}
                                         authUser={authUser} component={MainApp}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                    </div>
                </IntlProvider>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({settings, auth}) => {
    const {sideNavColor, locale} = settings;
    const {authUser, initURL} = auth;
    return {sideNavColor, locale, authUser, initURL}
};

export default connect(mapStateToProps, {setInitUrl})(App);

