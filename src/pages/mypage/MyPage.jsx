import React from 'react'
import MyPageMenu from '../../components/myPageMenu/MyPageMenu'
import MyPageProfileInfo from '../../components/myPageProfileInfo/MyPageProfileInfo'
import MyPageProfileMain from '../../components/myPageProfileMain/MyPageProfileMain'
import style from './myPage.module.css'


export default function Mypage() {
    return (
        <>
            <MyPageProfileInfo/>
            <div
                style={{
                    minHeight : "700px",
                    display : "flex",
                }}
            >
                <MyPageMenu/>
                <MyPageProfileMain/>
            </div>
            <div className={style.cont}>sdfsf</div>
        </>
    )
}


