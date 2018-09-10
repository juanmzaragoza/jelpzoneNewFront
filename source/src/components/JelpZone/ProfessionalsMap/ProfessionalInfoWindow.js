import React from 'react';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';

const ProfessionalInfoWindow = ({ professional }) => {
  const {
    name, 
    destination, 
    description, 
    image, 
    content, 
    chipList
  } = professional;

  return (
    <div className="m-1">
      <div className="jr-card px-0 pt-sm-5 text-center">
        <img className="size-100 avatar-shadow rounded-circle mx-auto mb-2" src={image} alt="Team-member"/>
        <div className="card-body bg-transparent">
          <h3 className="card-title">{name}</h3>
          <span className="post-designation">{destination}</span>
          <p className="card-text">{description}</p>
          {/* iterate over professions */
            chipList && chipList.map((name,index) => {
              return(
                <Chip
                  key={index}
                  className="mr-1 mb-1"
                  avatar={
                    <Avatar>
                        <FaceIcon className="bg-gray lighten-3 " />
                    </Avatar>
                  }
                  label={name}
                />
              )
            })
          }
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};


export default ProfessionalInfoWindow;