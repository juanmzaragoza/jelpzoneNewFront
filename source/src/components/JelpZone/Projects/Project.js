import React from 'react';
import Avatar from 'material-ui/Avatar';
import Simple from 'components/JelpZone/carousel/simple';
import Comments from 'components/JelpZone/Comments';

const Project = ({projectData}) => {

  console.log(projectData);

    const {id, title, description, date, comments} = projectData;

    return (
      <div className="card">
        <div className="card-header">
          <h2 className="card-heading">{title}</h2>
        </div>
        <Simple />
        <Comments data={projectData.comments}/>
      </div>
    );
};

export default Comment;
