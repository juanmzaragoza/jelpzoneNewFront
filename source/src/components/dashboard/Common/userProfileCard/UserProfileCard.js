import React from 'react';
import IconButton from 'material-ui/IconButton';

function UserProfileCard (props) {

    return (
        <div className="jr-card text-center">

            <div className={`jr-card-header-color ${props.headerStyle}`}>
                <div className="jr-card-header-top">
                    <IconButton className="jr-menu-icon mr-auto" aria-label="Menu">
                        <span className="menu-icon bg-white"/>
                    </IconButton>
                    <IconButton><i className="zmdi zmdi-more-vert text-white"/></IconButton>
                </div>

                <img className="rounded-circle size-100 avatar-shadow mb-3"
                     src="http://via.placeholder.com/150x150" alt="Team Member"/>

                <div className="jr-card-hd-content text-white">
                    <h4 className="mb-0">{props.information.firstName} {props.information.lastName}</h4>
                    <p className="mb-0">{props.information.email}</p>
                </div>
            </div>
            <div className="jr-card-body">
                <p>Cenas in erat accumsan, hendrerit lorem vel, pulvinar odio. Quisque eu conva.</p>
            </div>
        </div>
    )
};

export default UserProfileCard;

