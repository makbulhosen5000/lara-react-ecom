import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';
import { Footer } from '../common/footer/Footer';
import { AdminAuthContext } from '../provider/AdminAuthProvider';

const Main = () => {
    const { authenticate } = useContext(AdminAuthContext);
    return (
        <div className='mx-4'>
            {
                !authenticate &&
                <Navbar/>
            }
            <Outlet/>
            {
                !authenticate &&
                <Footer/>
            }
        </div>
    );
};

export default Main;