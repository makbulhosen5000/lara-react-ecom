import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AdminAuthContext } from '../provider/AdminAuth';

export default function AdminPrivateRoute({children}) {
    const {user} = useContext(AdminAuthContext);
    if(!user){
       return <Navigate to="/admin/login" />
    }
    return children;
}
