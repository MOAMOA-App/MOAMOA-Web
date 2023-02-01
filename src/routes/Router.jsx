import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "../components/HeaderLayout";
import Layout from "../components/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Missing from "../pages/missing/Missing";


export default function Router() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/login/" element={<Login />} />
        //         <Route path="/signup" element={<SignUp />} />
                
        //     </Routes>
        // </BrowserRouter>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path="login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />


    <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
    </Route>

    <Route path="*" element={<Missing />} />
  </Route>
</Routes>
</BrowserRouter>
        )
}