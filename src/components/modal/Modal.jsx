import React, { useEffect, useRef } from "react";
import menu from "../../assets/images/menu_btn.svg";

import * as S from "../../styles/Modal.styled";
import list from "../../data/alarm.json";

export default function Modal({ type, modalOpen, setModalOpen, handleModal }) {
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

    return (
        <S.Back>
            <S.Wrap ref={modalRef}>
                <S.List>
                    {list.list.map((a) => (
                        <>
                            <S.ListItem>
                                <div>
                                    <S.Title>{a.subject}</S.Title>
                                    <S.ListContent>{a.message}</S.ListContent>
                                </div>
                                <S.Menu>
                                    <img src={menu} alt="" />
                                </S.Menu>

                                <S.ListDate>{a.send_date}</S.ListDate>
                            </S.ListItem>
                            <S.Border></S.Border>
                        </>
                    ))}
                </S.List>
            </S.Wrap>
        </S.Back>
    );
}
