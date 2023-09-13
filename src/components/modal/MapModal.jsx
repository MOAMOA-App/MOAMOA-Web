import React, { useEffect, useRef } from "react";
import style from "./modal.module.css";
import { Link } from "react-router-dom";
import chat from "../../assets/images/chat.svg";
import alarm from "../../assets/images/alarm.svg";
import cancel from "../../assets/images/cancel.svg";
import mozip from "../../assets/images/mozip.svg";
import DaumPostcode from "react-daum-postcode";
import * as S from "../../styles/MapModal.styled";

export default function MenuModal({
    type,
    modalOpen,
    setModalOpen,
    handleModal,
    setInputAddressValue,
    setInputZipCodeValue,
}) {
    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
    };

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef();

    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };

        // 이벤트 핸들러 등록
        document.addEventListener("mousedown", handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응

        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener("mousedown", handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });
    const postCodeStyle = {
        width: "400px",
        height: "400px",
    }; // 스타일 정의 code
    const onCompletePost = (data) => {
        setInputAddressValue(data.address);
        setInputZipCodeValue(data.zonecode);
        closeModal();
    }; // onCom
    return (
        <S.Back>
            <S.MapWrap ref={modalRef}>
                <DaumPostcode
                    style={postCodeStyle}
                    onComplete={onCompletePost}
                ></DaumPostcode>
            </S.MapWrap>
        </S.Back>
    );
}
