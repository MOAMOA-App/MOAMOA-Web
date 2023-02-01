import React from 'react'
import MyPageMenu from '../../components/myPageMenu/MyPageMenu'
import MyPageProfileInfo from '../../components/myPageProfileInfo/MyPageProfileInfo'
import MyPageProfileSettiong from '../../components/myPageProfileSettiong/MyPageProfileSettiong'
import style from './myPage.module.css'


export default function Mypage() {
    return (
        <>
            <MyPageMenu/>
            <MyPageProfileInfo/>
            <MyPageProfileSettiong/>
            <div className={style.cont}>sdfsf</div>
        </>
    )
}


