import React from 'react';
import Avatar from 'material-ui/Avatar';

/*

Este componente debe interactuar con el usuario con los likes/dislikes a la api

*/

const Comment = ({commentData}) => {

    const {id, image, userName, title, description, date} = commentData;
    return (

        <div className="media user-profile" key={id}>

            <Avatar
                alt={userName}
                src={image}
                className="user-avatar mr-2"
            />

          <div className="media-body align-self-center">
            <h5 className="mb-1">{userName} @ {date}:</h5>
            {description}
            <hr/>
            <div className="btn-group-mins text-right">
              <a className="btn jr-btn-xs btn-primary" href="javascript:void(0)">
                <i className="zmdi zmdi-thumb-up mr-1"></i>
              </a>
              <a className="btn jr-btn-xs btn-secondary" href="javascript:void(0)">
                <i className="zmdi zmdi-thumb-down mr-1"></i>
              </a>
            </div>
          </div>
        </div>

    );
};

export default Comment;
