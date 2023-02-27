import React from 'react'
import style from './header.module.css'
import { useState } from 'react';
import Search from '../search/Search.jsx';

export default function Header() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className={style.headerWhole}>
        <div className={style.headerLeft}>
          <a href="/">
            <img className={style.headerLogo} src="./iconLogo.png" alt="로고" />
          </a>
        </div>
        <div className={style.headerRight}>
          <a className={style.headerToWebChat} href="/">
            <img className={style.headerToWebFuncImg} src="./headericon/chatbubble.png" alt="채팅" />
          </a>
        
          <button type="button" className={style.headertoWebAlarmPopoverBtn} title="Popover title"
            data-container="body" data-toggle="popover" data-placement="bottom" data-content="content">
            <img className={style.headerToWebFuncImg} src="./headericon/notification.png" alt="알림" />
          </button>
          
          <a className={style.headerToWebMyPage} href="/mypage">
              <img className={style.headerToWebMyPageImg} src="./icon.png" alt="마이페이지" />
          </a>

          <button className={style.headerUploadBtn}>
            <a className={style.headerToWebUpload} href="/upload">
              <img className={style.headerToWebUploadImg} src="./headericon/writing.png" alt="" />
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
            <img src="./headericon/search.png" alt="" />
          </button>
          {modalOpen && <Search setModalOpen={setModalOpen} />}
        </div>
        
      </nav>
      <hr></hr>
    </>
  )
}
