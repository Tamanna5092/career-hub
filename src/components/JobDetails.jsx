import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiDollar, CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    return (
        <div>
            <h1>Job Details</h1>
            <div className='grid gap-6 md:grid-cols-4'>
                <div className='border-4 md:col-span-3'>
                    <p>Job Description: {job.job_description}</p>
                    <p>Job Responsibility: {job.job_responsibility}</p>
                    <p>Education Requirement: {job.educational_requirements}</p>
                    <p>Experience: {job.experiences}</p>
                </div>
                <div className='border-4'>
                    <div>
                    <h3>Job Details</h3>
                    <hr />
                    <p className='flex'><CiDollar className='text-2xl'></CiDollar>{job.salary}</p>
                    <p className='flex'><IoBagOutline className='text-2xl'></IoBagOutline> Job Title: {job.job_title}</p>
                    <h3>Contact Information</h3>
                    <hr />
                    <p className='flex'><FaPhoneAlt className='text-2xl'></FaPhoneAlt>Phone: {job.contact_information.phone}</p>
                    <p className='flex'><CiMail className='text-2xl'></CiMail> Email: {job.contact_information.email}</p>
                    <p className='flex'><CiLocationOn className='text-2xl'></CiLocationOn>Address: {job.contact_information.address}</p>
                    </div>
                    <div>
                    <button className='btn w-full btn-primary'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;