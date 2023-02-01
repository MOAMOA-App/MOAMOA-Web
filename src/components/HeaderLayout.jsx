import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'


export default function HeaderLayout() {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet />
        </div>
    )
}
