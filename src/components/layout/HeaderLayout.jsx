import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

export default function HeaderLayout() {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
        </div>
    );
}
