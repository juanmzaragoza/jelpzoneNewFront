import React from 'react';
import Project from "./Project";

const Projects = ({data}) => {

    return (
        <div>

          <h3 className="card-footer">
            <i className="zmdi zmdi-comment-text mr-2"></i>
            Comments
          </h3>

            <div className="card-body">

            {data.map((data, index) => {
                return (
                  <Project key={index} projectData={data}/>
                );
            })}

            </div>
        </div>
    );
};

export default Projects;
