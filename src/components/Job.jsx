import React from 'react';

const Job = ({job}) => {
    const {location} = job
    console.log(job)
    return (
        <div>
            <h1>Job Location: {location}</h1>
        </div>
    );
};

export default Job;