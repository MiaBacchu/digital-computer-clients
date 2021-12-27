import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/Context/useAuth';

const AdminRoute = ({children,redirectTo}) => {
    const location=useLocation()
    const {admin,loading}=useAuth()
    if (loading) {
        return 'loading'
    }
    return (
        admin ? children : <Navigate to={redirectTo} state={{from:location}}></Navigate>
    );
};

export default AdminRoute;