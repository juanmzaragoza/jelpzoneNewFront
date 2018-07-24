import React from 'react';
import FeedCell from "./FeedCell";

const DailyFeed = ({data}) => {

    return (
        <div>
            {data.map((data, index) => {
                return (
                    <FeedCell id={index} key={index} feed={data}/>
                );
            })}
        </div>
    );
};

export default DailyFeed;
