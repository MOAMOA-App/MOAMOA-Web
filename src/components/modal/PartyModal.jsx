import React, { useEffect, useRef } from "react";
import menu from "../../assets/images/menu_btn.svg";

import * as S from "../../styles/PartyModal.styled";
import list from "../../data/alarm.json";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostParty } from "../../queries/postParty";

export default function PartyModal({
    data,
    modalOpen,
    setModalOpen,
    handleModal,
}) {
    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
    };

    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef();
    const {
        mutateAsync: postParty,
        isLoading = false,
        isError = false,
        error,
    } = usePostParty();
    const { register, handleSubmit, watch, reset, setValue } = useForm();
    const onSubmit = (content) => {
        let resData = {
            product: data.id,
            count: Number(content.count),
            buyer: 2,
            address: "주소",
        };
        
        let res = postParty(resData);
        setModalOpen(false);
    };

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
            <S.Wrap ref={modalRef} onSubmit={handleSubmit(onSubmit)}>
                <h1>제목: {data.title}</h1>
                <p>현재 잔여개수 {`${data.sellCount}/${data.maxCount}`} 중</p>
                <input type="number" {...register("count")} />
                <label htmlFor="">개 구매할게요</label>
                <span>{data.sellPrice}원</span>
                <S.BtnCont>
                    <button>취소</button>
                    <button>참여하기</button>
                </S.BtnCont>
            </S.Wrap>
        </S.Back>
    );
}
