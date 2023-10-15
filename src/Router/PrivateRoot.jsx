import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoot = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner text-center text-success loading-lg"></span>
    }
    if(user?.email){
        return children
    } 
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoot;