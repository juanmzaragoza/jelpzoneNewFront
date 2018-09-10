import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';
import { getItem } from 'util/ApplicationStorage';

class UserInfo extends React.Component {

    state = {
        anchorEl: null,
        open: false,
        userName: getItem("user_name")
    };

    handleClick = event => {
        this.setState({open: true, anchorEl: event.currentTarget});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div className="user-profile d-flex flex-row align-items-center">
                <Avatar
                    alt='...'
                    src={this.props.avatar}
                    className="user-avatar "
                />
                <div className="user-detail">
                    <h4 className="user-name" onClick={this.handleClick}>{this.props.userName}<i
                        className="zmdi zmdi-caret-down zmdi-hc-fw align-middle"/>
                    </h4>
                </div>
                <Menu className="user-info"
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      open={this.state.open}
                      onClose={this.handleRequestClose}
                      PaperProps={{
                          style: {
                              width: 120,
                              paddingTop: 0,
                              paddingBottom: 0
                          }
                      }}
                >
                    <MenuItem onClick={this.handleRequestClose}>
                        <NavLink to={`/app/profile/`}>
                          <i className="zmdi zmdi-account zmdi-hc-fw mr-2"/>
                          <IntlMessages id="popup.profile"/>
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>
                      <NavLink to={`/app/profileUpdate/`}>
                        <i className="zmdi zmdi-settings zmdi-hc-fw mr-2"/>
                        <IntlMessages id="popup.setting"/>
                      </NavLink>
                    </MenuItem>
                    <MenuItem onClick={() => {
                        this.handleRequestClose();
                        this.props.userSignOut()
                    }}>
                        <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2"/>

                        <IntlMessages id="popup.logout"/>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = ({settings, profile}) => {
    const { locale } = settings;
    const { information } = profile;
    return {
      locale,
      userName: information.email,
      avatar: information.profileImages && information.profileImages.length? REACT_APP_API_URL.replace('/api','') + information.profileImages[0].path:null
    }
};
export default connect(mapStateToProps, {userSignOut})(UserInfo);


