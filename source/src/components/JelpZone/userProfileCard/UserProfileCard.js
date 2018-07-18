import React from 'react';
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';
import Tooltip from 'material-ui/Tooltip';
import FaceIcon from 'material-ui-icons/Face';
import Avatar from 'material-ui/Avatar';

import IntlMessages from 'util/IntlMessages';

function UserProfileCard (props) {

  return (
        <div className="card text-center">
            <div className={`card-header-color ${props.headerStyle}`}>

              <div className="card-header-top text-right">
                <IconButton
                  className="btn-sm mr-auto  text-white"
                >
                  <i className="zmdi zmdi-more-vert"></i>
                </IconButton>
              </div>

                <img className="rounded-circle size-125 avatar-shadow mb-3"
                     src="http://via.placeholder.com/150x150" alt={`${props.information.firstName} ${props.information.lastName}`} />
                <div className="card-body text-white">
                    <h4 className="mb-0">{props.information.firstName} {props.information.lastName}</h4>
                    <p className="mb-0">{props.information.email}</p>

                </div>

                <div className="card-footer border-0 bg-transparent">
                  <div className="btn-group-mins">
                    <Tooltip id="tooltip-contact-user" title={<IntlMessages id="appModule.UserProfile.Call"/>}>
                      <a href="#" className="btn btn-xs bg-white">
                        <i className="zmdi zmdi-phone zmdi-hc-lg text-green"></i>
                      </a>
                    </Tooltip>
                    <Tooltip id="tooltip-contact-user" title={<IntlMessages id="appModule.UserProfile.Chat"/>}>
                      <a href="#" className="btn btn-xs bg-white">
                        <i className="zmdi zmdi-comment zmdi-hc-lg text-orange"></i>
                      </a>
                    </Tooltip>
                    <Tooltip id="tooltip-video-call" title={<IntlMessages id="appModule.UserProfile.VideoCall"/>} >
                      <a href="#" className="btn btn-xs bg-white">
                        <i className="zmdi zmdi-videocam zmdi-hc-lg"></i>
                      </a>
                    </Tooltip>
                    <Tooltip id="tooltip-share-profile" title={<IntlMessages id="appModule.UserProfile.Share"/>} >
                      <a href="#" className="btn btn-xs bg-white">
                        <i className="zmdi zmdi-share zmdi-hc-lg"></i>
                      </a>
                    </Tooltip>
                  </div>
                </div>

            </div>

            <div className="card-body">

              { props.information.biography ?
                <p>{props.information.biography}</p>
                : <p>No Bio has been written yet for this user</p>
              }
              <hr/>
              <h4>Professions</h4>
              <Chip
                className="mr-1 mb-1"
                avatar={
                  <Avatar>
                      <FaceIcon className="bg-gray lighten-3 " />
                  </Avatar>
                }
                label="Profession 1"
              />
              <Chip
                className="mr-1 mb-1"
                avatar={
                  <Avatar>
                      <FaceIcon className="bg-gray lighten-3 " />
                  </Avatar>
                }
                label="Profession 2"
              />
              <Chip
                className="mr-1 mb-1"
                avatar={
                  <Avatar>
                      <FaceIcon className="bg-gray lighten-3 " />
                  </Avatar>
                }
                label="Profession 3"
              />
            </div>

        </div>
      )
};

export default UserProfileCard;

