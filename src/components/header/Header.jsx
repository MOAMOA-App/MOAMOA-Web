import React from 'react'
import style from './header.module.css'
import { useState } from 'react';
import Search from '../search/Search.jsx';
import Notification from '../notification/Notification';

import iconLogo from '../../assets/images/iconLogo.png'

import search from '../../assets/images/headericon/search.png'
import writing from '../../assets/images/headericon/writing.png'


export default function Header() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);   // 검색모달
  const [modalNoteOpen, setModalNoteOpen] = useState(false);  // 알림모달

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };  // 알림모달

  const showNoteModal = () => {
    setModalNoteOpen(true);
  };  // 검색모달

  return (
    <>
      <div className={style.headerWhole}>
        <div className={style.headerLeft}>
          <a href="/">
            <img className={style.headerLogo} src={iconLogo} alt="로고" />
          </a>
        </div>
        <div className={style.headerRight}>
          <a className={style.headerToWebChat} href="/chatting">
            <img className={style.headerToWebFuncImg} src="https://www.noticons.com/icon/6Yy/000000/FFFEFE" alt="채팅" />
          </a>
        
          <button type="button"
            className={style.headertoWebAlarmPopoverBtn}
            onClick={showNoteModal}>
            <img className={style.headerToWebFuncImg} src="https://www.noticons.com/icon/2zbd/000000/FFFEFE" alt="알림" />
          </button>
          {modalNoteOpen && <Notification setModalOpen={setModalNoteOpen} />}
          
          
          <a className={style.headerToWebMyPage} href="/mypage">
              <img className={style.headerToWebMyPageImg} src="./icon.png" alt="마이페이지" />
          </a>

          <button 
            id={style.headerUploadBtn}
            className={style.headerUploadBtn}>
            <a className={style.headerToWebUpload} href="/upload">
              <img className={style.headerToWebUploadImg} src={writing} alt="" />
              <span>공동구매 모집</span>
            </a>
          </button>
        </div>

      </div>

      <nav className={style.headerNav}>
        <div className={style.headerNavLeft}>
          <a className='toMOAWebHome' href="/">
            <span>홈</span>
          </a>
          <a className='toMOAWebListPopular' href="/">
            <span>인기순</span>
          </a>
          <a className='toMOAWebHomeListDeadLine' href="/">
            <span>마감순</span>
          </a>
          <a className='toMOAWebHomeListLatest' href="/">
            <span>최신순</span>
          </a>
        </div>
        
        <div className={style.headerNavRight}>
          <input id={style.headerSearchKeyword} type="text" placeholder="검색어를 입력해주세요."></input>
          <button onClick={showModal}>
            <img src={search} alt="" />
          </button>
          {modalOpen && <Search setModalOpen={setModalOpen} />}
        </div>
        
      </nav>
      <hr></hr>
    </>
  )
}
