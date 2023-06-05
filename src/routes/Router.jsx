import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "../pages/loginPage/Login";
import  Login  from "../pages/login/Login";
import  Home  from "../pages/home/Home";
import Layout from "../layout/Layout.tsx";
import SignUp from "../pages/signUp/SignUp";
import Write from "../pages/write/Write.tsx";
import Alarm from "../pages/alarm/Alarm";
import ChatRoom from "../pages/chatRoom/ChatRoom";
import Profile from "../pages/profile/Profile";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/alarm" element={<Alarm />} />
            <Route path="/chat" element={<ChatRoom />} />
            <Route path="/profile" element={<Profile />} />
        </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
        )
}