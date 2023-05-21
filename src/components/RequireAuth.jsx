import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import Navbar from '../layout/Navbar';

function RequireAuth() {
    const { auth } = useContext(AuthContext);
    console.log(auth);
    const location = useLocation();

    return (
        <>
        {auth ? (
            <>
            <Outlet />
            <Navbar />
            </>
        ) : (
            <Navigate to="login" state={{ from: location }} replace />
        )}
        </>
    )
}

export default RequireAuth