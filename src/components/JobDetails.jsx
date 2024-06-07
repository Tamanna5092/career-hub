import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    return (
        <div>
            <h1>job details: {id}</h1>
            <div className='grid gap-6 md:grid-cols-4'>
                <div className='border-4 md:col-span-3'></div>
                <div className='border-4'></div>
            </div>
        </div>
    );
};

export default JobDetails;