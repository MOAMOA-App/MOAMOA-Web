import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Chat from "../chat/Chat";
import Profile from "../profile/Profile";
import Write from "../write/Write";
import RequireAuth from "../components/RequireAuth";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";

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
