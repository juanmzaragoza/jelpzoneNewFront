import React from 'react';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import {COLLAPSED_DRAWER, FIXED_DRAWER} from 'constants/ActionTypes';
import MailNotification from 'components/JelpZone/MailNotification/index';
import AppNotification from 'components/JelpZone/AppNotification/index';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import {switchLanguage, setThemeColor} from 'actions/Setting';
import IntlMessages from 'util/IntlMessages';
import LanguageSwitcher from 'components/LanguageSwitcher/index';

class Header extends React.Component {

    onAppNotificationSelect = () => {
        this.setState({
            appNotification: !this.state.appNotification
        })
    };
    onMailNotificationSelect = () => {
        this.setState({
            mailNotification: !this.state.mailNotification
        })
    };
    onLangSwitcherSelect = (event) => {
        this.setState({
            langSwitcher: !this.state.langSwitcher, anchorEl: event.currentTarget
        })
    };

    handleRequestClose = () => {
        this.setState({langSwitcher: false, mailNotification: false, appNotification: false});
    };

    constructor() {
        super();
        this.state = {
            anchorEl: undefined,
            mailNotification: false,
            langSwitcher: false,
            appNotification: false,
        }
    }

    render() {
        const {onToggleCollapsedNav, drawerType, locale} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-block d-xl-none' : drawerType.includes(COLLAPSED_DRAWER) ? 'd-block' : 'd-none';

        return (
            <AppBar className="app-main-header">
                <Toolbar className="app-toolbar" disableGutters={false}>
                    <IconButton className={`jr-menu-icon ${drawerStyle}`} aria-label="Menu"
                                onClick={onToggleCollapsedNav}>
                        <span className="menu-icon"/>
                    </IconButton>

                    <Link className="app-logo" to="/">
                        <img src="/JelpZoneApp.png" alt="JelpZone" title="JelpZone"/>
                    </Link>

                    <ul className="header-notifications list-inline ml-auto">

                        <li className="list-inline-item">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.langSwitcher}
                                toggle={this.onLangSwitcherSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <div className="d-flex align-items-center pointer">
                                        <i className={`flag flag-32 flag-${locale.icon}`}/>
                                        <h4 className="mb-0 ml-1 d-none d-md-block">{locale.name}</h4>
                                    </div>
                                </DropdownToggle>

                                <DropdownMenu right className="w-50">
                                    <LanguageSwitcher switchLanguage={this.props.switchLanguage}/>
                                </DropdownMenu>
                            </Dropdown>


                        </li>
                        <li className="list-inline-item app-tour">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.appNotification}
                                toggle={this.onAppNotificationSelect.bind(this)}>

                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">
                                    <IconButton className="icon-btn size-30">
                                        <i className="zmdi zmdi-notifications-active icon-alert animated infinite wobble"/>
                                    </IconButton>
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <CardHeader styleName="align-items-center"
                                                heading={<IntlMessages id="appNotification.title"/>}/>
                                    <AppNotification/>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                        <li className="list-inline-item mail-tour">
                            <Dropdown
                                className="quick-menu"
                                isOpen={this.state.mailNotification}
                                toggle={this.onMailNotificationSelect.bind(this)}
                            >
                                <DropdownToggle
                                    className="d-inline-block"
                                    tag="span"
                                    data-toggle="dropdown">

                                    <IconButton className="icon-btn size-30">
                                        <i className="zmdi zmdi-comment-alt-text icon-alert zmdi-hc-fw"/>
                                    </IconButton>
                                </DropdownToggle>


                                <DropdownMenu right>
                                    <CardHeader styleName="align-items-center"
                                                heading={<IntlMessages id="mailNotification.title"/>}/>
                                    <MailNotification/>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        );
    }

}

const mapStateToProps = ({settings}) => {
    const {locale} = settings;
    return {locale}
};

export default connect(mapStateToProps, {switchLanguage})(Header);
