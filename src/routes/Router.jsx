import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "../pages/loginPage/Login";
import  Login  from "../pages/login/Login";
import  Home  from "../pages/home/Home";
import Layout from "../layout/Layout";
import Signup from "../pages/signup/Signup";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Layout />}>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
        </Route>
            </Routes>
        </BrowserRouter>
        )
}