import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!!!</h1>
            <Link to={'/'}><button className='bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100% px-6 py-4 rounded-lg'>Go back to home</button></Link>
        </div>
    );
};

export default ErrorPage;