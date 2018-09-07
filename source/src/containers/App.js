import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss'
import 'styles/app.scss';
import 'styles/app-rtl.scss';
import pinkTheme from './themes/pinkTheme';
import darkTheme from './themes/darkTheme';
import AppLocale from '../languageProvider';
import {
    DARK_PINK,
    PINK
} from 'constants/ThemeColors';

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

    componentWillMount() {
        if (this.props.initURL === '') {
            this.props.setInitUrl(this.props.history.location.pathname);
        }
    }

    getColorTheme(themeColor, applyTheme) {
        switch (themeColor) {
            case PINK: {
                applyTheme = createMuiTheme(pinkTheme);
                break;
            }
            case DARK_PINK: {
                applyTheme = createMuiTheme(pinkTheme);
                break;
            }
        }
        return applyTheme;
    }

    render() {
        const {match, location, themeColor, isDarkTheme, locale, authUser, initURL} = this.props;
        let applyTheme = createMuiTheme(pinkTheme);
        if (isDarkTheme) {
            applyTheme = createMuiTheme(darkTheme)
        } else {
            applyTheme = this.getColorTheme(themeColor, applyTheme);
        }
        if (location.pathname === '/') {
            if (authUser === null) {
                return ( <Redirect to={'/signin'}/> );
            } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
                return ( <Redirect to={'/app/profile'}/> );
            } else {
                return ( <Redirect to={initURL}/> );
            }
        }

        const currentAppLocale = AppLocale[locale.locale];
        return (
            <MuiThemeProvider theme={applyTheme}>
                <IntlProvider
                    locale={currentAppLocale.locale}
                    messages={currentAppLocale.messages}
                >
                    <div className="app-main">
                        <RestrictedRoute path={`${match.url}app`} authUser={authUser} component={MainApp}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                    </div>
                </IntlProvider>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({settings, auth}) => {
    const {themeColor, sideNavColor, darkTheme, locale} = settings;
    const {authUser, initURL} = auth;
    return {themeColor, sideNavColor, isDarkTheme: darkTheme, locale, authUser, initURL}
};

export default connect(mapStateToProps, {setInitUrl})(App);
