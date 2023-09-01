import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import logo from "../assets/images/logo.png";
import mbileLogo from "../assets/images/mbileLogo.png";
import { Link } from "react-router-dom";

import chat from "../assets/images/chat.svg";
import alarm from "../assets/images/alarm.svg";
import mozip from "../assets/images/mozip.svg";
import hamburger from "../assets/images/menu.svg";
import * as S from "../style/Layout.styled";
import ModalPortal from "../components/modal/ModalPortal";
import Modal from "../components/modal/Modal";
import MenuModal from "../components/modal/MenuModal";
import useCustomModal from "../hooks/useCustomModal";

function Navbar() {
    const authContext = useContext(AuthContext);
    const { modalOpen, modalSecondOpen, setModalOpen, setModalSecondOpen } =
        useCustomModal();
    const {
        modalOpen: modalOpen2,
        setModalOpen: setModalOpen2,
        setModalSecondOpen: setModalSecondOpen2,
    } = useCustomModal();
    if (!authContext) {
        throw new Error("컴포넌트는 AuthProvider 내부에서 사용되어야 합니다.");
    }

    const { setAuth } = authContext;

    //로그아웃
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.removeItem("name");
        setAuth(localStorage.getItem("name"));
    };

    // 모달창 노출
    const showModal = (e: any) => {
        setModalOpen(true);
    };

    const showModal2 = (e: any) => {
        setModalOpen2(true);
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
                    <Link to="/chat">
                        <S.Icon src={chat} alt="" />
                    </Link>
                    <div>
                        <S.Icon src={alarm} alt="" onClick={showModal}></S.Icon>
                        {modalOpen && (
                            <ModalPortal>
                                <Modal
                                    type="product"
                                    modalOpen={modalOpen}
                                    setModalOpen={setModalOpen}
                                    handleModal={showModal}
                                    // handleModal={handleProductDetail}
                                />
                            </ModalPortal>
                        )}
                    </div>
                    <Link to="/profile">
                        <S.Profile />
                    </Link>
                </S.Wrap>
            </S.Header>

            <S.MobileHeader>
                <img src={hamburger} alt="" onClick={showModal2} />
                <Link to="/">
                    <img src={logo} alt="" style={{ width: "100px" }} />
                </Link>
            </S.MobileHeader>

            {modalOpen2 && (
                <ModalPortal>
                    <MenuModal
                        type="product"
                        modalOpen={modalOpen2}
                        setModalOpen={setModalOpen2}
                        handleModal={showModal2}
                        // handleModal={handleProductDetail}
                    />
                </ModalPortal>
            )}
        </>
    );
}

export default Navbar;
