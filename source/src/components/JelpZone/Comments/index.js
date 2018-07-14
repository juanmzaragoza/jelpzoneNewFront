import React from 'react';
import Comment from "./Comment";

const Comments = ({data}) => {

    return (
        <div>

          <h3 className="card-footer">
            <i className="zmdi zmdi-comment-text mr-2"></i>
            Comments
          </h3>

            <div className="card-body">

            {data.map((data, index) => {
                return (
                  <Comment key={index} commentData={data}/>
                );
            })}

            </div>
        </div>
    );
};

export default Comments;
