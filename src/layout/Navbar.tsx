import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import logo from "../assets/images/logo.png";
import title from "../assets/images/title.png";

import chat from "../assets/images/chat.svg";
// import alarm from "../assets/images/alarm.svg";
import mozip from "../assets/images/mozip.svg";
import * as S from "../style/Layout.styled";

function Navbar() {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("컴포넌트는 AuthProvider 내부에서 사용되어야 합니다.");
    }

    const { setAuth } = authContext;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.removeItem("name");
        setAuth(localStorage.getItem("name"));
    };

    return (
        <>
            <S.Header>
                <S.LogoCont to="/">
                    <img src={logo} alt="" />
                    {/* <img src={title} alt="" /> */}
                </S.LogoCont>
                <S.Wrap>
                    <S.Write to="/write">
                        <img src={mozip} alt="" />
                        공동구매 모집
                    </S.Write>
                    <S.Icon to="/chat" />
                    {/* <S.Icon /> */}
                    <S.Profile onClick={handleClick} />
                </S.Wrap>
            </S.Header>
        </>
    );
}

export default Navbar;
