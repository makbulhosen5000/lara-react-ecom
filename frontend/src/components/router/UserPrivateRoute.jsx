import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuthContext } from '../provider/UserAuthProvider';

export default function UserPrivateRoute({children}) {
    const {user} = useContext(UserAuthContext);
    if(!user){
       return <Navigate to="/account/user/login" />
    }
    return children;
}
