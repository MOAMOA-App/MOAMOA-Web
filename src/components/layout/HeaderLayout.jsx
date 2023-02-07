import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

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
            <Header />
            <Outlet />
        </div>
    );
}
