import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Chat from "../pages/chat/Chat";
import Profile from "../pages/profile/Profile";
import Write from "../pages/write/Write";
import RequireAuth from "../components/RequireAuth";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />

                <Route element={<RequireAuth />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/write" element={<Write />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Route>

                {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </BrowserRouter>
    );
}
