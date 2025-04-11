import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import { Footer } from '../Common/Footer';


const Main = () => {
    return (
        <div className='mx-4'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;