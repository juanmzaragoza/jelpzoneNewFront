import React from 'react';
import IconButton from 'material-ui/IconButton';

function UserProfileCard (props) {

    return (
        <div className="jr-card text-center">

            <div className={`jr-card-header-color ${props.headerStyle}`}>


                <img className="rounded-circle size-100 avatar-shadow mb-3"
                     src="http://via.placeholder.com/200x200" alt="Team Member"/>

                <div className="jr-card-hd-content text-white">
                    <h4 className="mb-0">{props.information.firstName} {props.information.lastName}</h4>
                    <p className="mb-0">{props.information.email}</p>
                </div>
            </div>

            <div className="jr-card-body">
              <p>Cenas in erat accumsan, hendrerit lorem vel, pulvinar odio. Quisque eu conva.</p>
            </div>

            <div className="jr-card-social">
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="zmdi zmdi-phone zmdi-hc-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="zmdi zmdi-favorite zmdi-hc-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="zmdi zmdi-bookmark zmdi-hc-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="zmdi zmdi-share zmdi-hc-lg"></i>
                  </a>
                </li>
              </ul>
            </div>

        </div>
    )
};

export default UserProfileCard;

