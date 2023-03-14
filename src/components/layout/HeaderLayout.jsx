import React from "react";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import Header from "../header/Header";
import HeaderMobile from "../headermobile/HeaderMobile"
import Footer from "../footer/Footer"


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 818 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 817 })
    return isMobile ? children : null
}

export default function HeaderLayout() {
    return (
        <div 
            style={{
                height: "100vh",
                maxWidth: "1130px",
                margin:"0 auto",
                position: "relative",
                backgroundColor: "#fff"
            }}>
            <Desktop>
                <Header />
                <Outlet />
                <Footer />
            </Desktop>
            <Mobile>
                <HeaderMobile />
                <Outlet />
                <Footer />
            </Mobile>
            
        </div>
    );
}
