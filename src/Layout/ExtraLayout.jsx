import React from 'react';
import Navbar from '../Pages/SharedPage/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const ExtraLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default ExtraLayout;