// import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const category = useLoaderData();
    console.log(category)
    return (
        <div className='my-32'>
            <h1 className='text-5xl font-extrabold text-center mb-4'>Job Category</h1>
            <p className='text-[#757575] font-medium text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex gap-6 mt-8 md:row-span-2'>
                {
                    category.map(categories => <div className='h-60 w-80 bg-gradient-to-r from-[#7E90FE0D] from-0% to-[#9873FF0D] to-100% p-10 rounded-lg'>
                        <img className='bg-gradient-to-r from-[#7E90FE1A] from-0% to-[#9873FF1A] to-100% p-4' src={categories.logo} alt="" />
                        <h3 className='text-xl font-extrabold mt-8'>{categories.category_name}</h3>
                        <p className='text-[#A3A3A3] font-medium'>{categories.availability}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;