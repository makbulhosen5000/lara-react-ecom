import React from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar/Navbar';
import { Footer } from '../common/Footer/Footer';


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