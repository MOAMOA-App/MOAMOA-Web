import React, { useState, useEffect } from 'react'

export default function useCustomModal(type) {
    // 모달 관리 변수
    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState();
    const [modalSecondOpen, setModalSecondOpen] = useState(false);

    // 모달창 노출
    const showModal = (e) => {
        setModalOpen(true);
        setSelected(e.target.id);

    };

    useEffect(()=>{
        //스크롤 금지 
        if(modalOpen){
            document.body.style.overflow ="hidden";
        }else{
            document.body.style.overflow ="";
        }
    }, [modalOpen])

    return {modalOpen, selected, modalSecondOpen, setModalOpen, setModalSecondOpen, showModal}
}
