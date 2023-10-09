import React from 'react';
import Navbar from '../Pages/SharedPage/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/SharedPage/Footer/Footer';

const Secondary = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Secondary;