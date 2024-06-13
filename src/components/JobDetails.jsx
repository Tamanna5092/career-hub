import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiDollar, CiLocationOn, CiMail } from "react-icons/ci";
import { FaPhoneAlt } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utility/localstorage';

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    // console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(idInt)
        toast('You have applied successfully!')
    }

    return (
        <div>
            <h1 className='text-3xl font-extrabold text-center bg-gradient-to-r from-[#7E90FE0D] from-0% to-[#9873FF0D] to-100% py-24'>Job Details</h1>
            <div className='grid gap-6 md:grid-cols-5 my-32'>
                <div className='md:col-span-3 text-[#757575] space-y-6'>
                    <p className='font-medium'><span className='text-black font-extrabold'>Job Description:</span> {job.job_description}</p>
                    <p className='font-medium'><span className='text-black font-extrabold'>Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className='font-medium'><span className='text-black font-extrabold'>Education Requirement:</span> <br /> <br /><span>{job.educational_requirements}</span></p>
                    <p className='font-medium'><span className='text-black font-extrabold'>Experience: <br /> <br /></span> {job.experiences}</p>
                </div>
                <div className='md:col-span-2 h-fit'>
                    <div className='bg-gradient-to-r from-[#7E90FE1A] to-[#9873FF1A] text-[#757575] p-8'>
                    <h3 className='text-xl text-black font-extrabold'>Job Details</h3>
                    <hr />
                    <p className='flex font-medium mt-6  mb-4'><CiDollar className='text-2xl mr-2'></CiDollar><span className='text-black font-extrabold'>Salary: </span> <span>{job.salary}</span>(Per Month)</p>
                    <p className='flex'><IoBagOutline className='text-2xl mr-2'></IoBagOutline> <span className='text-black font-extrabold'>Job Title: </span> {job.job_title}</p>
                    <h3 className='text-xl text-black font-extrabold mt-8 mb-6'>Contact Information</h3>
                    <hr />
                    <p className='flex mt-6'><FaPhoneAlt className='text-2xl mr-2'></FaPhoneAlt><span className='text-black font-extrabold'>Phone: </span> {job.contact_information.phone}</p>
                    <p className='flex my-4'><CiMail className='text-2xl mr-2'></CiMail> <span className='text-black font-extrabold'>Email: </span> {job.contact_information.email}</p>
                    <p className='flex'><CiLocationOn className='text-2xl mr-2'></CiLocationOn><span className='text-black font-extrabold'>Address: </span> {job.contact_information.address}</p>
                    </div>
                    <div>
                    <button onClick={handleApplyJob} className='btn w-full mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]'>Apply Now</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;