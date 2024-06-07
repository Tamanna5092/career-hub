import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import '../../App.css'

const Root = () => {
    return (
        <div className='manrope'>
            <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;