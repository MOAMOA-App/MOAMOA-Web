import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderLayout from "../components/layout/HeaderLayout";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Missing from "../pages/missing/Missing";
import Mypage from "../pages/mypage/MyPage";
import SellerManage from "../pages/sellermanage/Sellermanage";
import { MyPageProfile } from "../components/myPageMain/MyPageProfile";
import { MyPageAlarm } from "../components/myPageMain/MyPageAlarm";
import { MyPageSetting } from "../components/myPageMain/MyPageSetting";
import { MyPageCreated } from "../components/myPageMain/MyPageCreated";
import { MyPageParty } from "../components/myPageMain/MyPageParty";
import { MyPageHeart } from "../components/myPageMain/MyPageHeart";
import { SellerStockManage } from "../components/sellerMain/SellerStockManage";
import { SellerPartyManage } from "../components/sellerMain/SellerPartyManage";
import { SellerNoticeManage } from "../components/sellerMain/SellerNoticeManage";
import { SellerEditManage } from "../components/sellerMain/SellerEditManage";
import Upload from "../pages/upload/Upload";
import ProductList from "../pages/productList/ProductList";
import ProductDetail from "../pages/productDetail/ProductDetail"
import Chatting from "../pages/chat/Chatting";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/login" element={<Login />} />
                </Route>
                    <Route element={<HeaderLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/mypage" element={<Mypage />} >
                            <Route path="/mypage"         element={<MyPageProfile/>} />
                            <Route path="/mypage/alarm"   element={<MyPageAlarm/>} />
                            <Route path="/mypage/setting" element={<MyPageSetting/>} />
                            <Route path="/mypage/created" element={<MyPageCreated/>} />
                            <Route path="/mypage/party"   element={<MyPageParty/>} />
                            <Route path="/mypage/heart"   element={<MyPageHeart/>} />
                        </Route>
                        <Route path="/seller" element={<SellerManage/>}>
                            <Route path="/seller"       element={<SellerStockManage/>} />
                            <Route path="/seller/stock"  element={<SellerStockManage/>} />
                            <Route path="/seller/party"  element={<SellerPartyManage/>} />
                            <Route path="/seller/notice" element={<SellerNoticeManage/>} />
                            <Route path="/seller/edit"   element={<SellerEditManage/>} />
                        </Route>
                        <Route path="/chatting" element={<Chatting />} />
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/productlist" element={<ProductList />} />
                        <Route path="/product" element={<ProductDetail />} />
                    </Route>
                    <Route path="*" element={<Missing />} />
            </Routes>
        </BrowserRouter>
    );
}
