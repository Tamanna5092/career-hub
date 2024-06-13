import React from 'react';
import user from '../../src/assets/images/user.png'

const Banner = () => {
    return (
        <div className='grid gap-6 md:grid-cols-6 bg-gradient-to-r from-[#7E90FE0D] from-0% to-[#9873FF0D] to-100%'>
            <div className='md:col-span-3'>
            <h1 className='text-7xl font-extrabold my-6'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
            <p className='text-[#757575] font-medium mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="btn bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% text-white font-extrabold py-4 px-7">Get Started</button>
            </div>
            <div className='md:col-span-3'>
                <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Banner;