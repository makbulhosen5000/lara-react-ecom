import React, { useContext } from 'react';

import { Outlet } from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';
import { Footer } from '../common/footer/Footer';
import { AdminAuthContext } from '../provider/AdminAuthProvider';

const Main = () => {
    const { adminDashboardHideShow } = useContext(AdminAuthContext);
    return (
        <div className='mx-4'>
            {
                !adminDashboardHideShow &&
                <Navbar/>
            }
            <Outlet/>
            {
                !adminDashboardHideShow &&
                <Footer/>
            }
        </div>
    );
};

export default Main;