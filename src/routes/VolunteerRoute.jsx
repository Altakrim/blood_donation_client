import React from 'react';
import { Navigate } from 'react-router';
import useRole from '../hooks/useRole';

const VolunteerRoute = ({ children }) => {
    const {role, roleLoading} = useRole();

    if(roleLoading) {
        return <span className='loading loading-spinner loading-xl items-center'></span>;
    }
    if(role !== "volunteer"){
        return <Navigate to="/" replace />;
    }
    return children;
};

export default VolunteerRoute;