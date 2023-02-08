import React from 'react'
import {NavLink} from 'react-router-dom';
import style from './myPageMenu.module.css'
export default function MyPageMenu() {
  return (
    <div 
      style={{
        minWidth : "170px",
        width : "170px",
        paddingLeft  : "20px",
        paddingRight : "20px"
      }}
    >
      <nav>
        <h2 className={style.myMenuH}>내 활동</h2>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/created">
          <li className={style.myMenuP}>생성한 공동구매</li>
        </NavLink>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/party">
          <li className={style.myMenuP}>참여한 공동구매</li>
        </NavLink>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/heart">
          <li className={style.myMenuP}>관심 공동구매</li>
        </NavLink>
      </nav>
      <nav>
        <h2 className={style.myMenuH}>내 정보</h2>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/">
          <li className={style.myMenuP}>내 프로필</li>
        </NavLink>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/alarm">
          <li className={style.myMenuP}>알림 설정</li>
        </NavLink>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/setting">
          <li className={style.myMenuP}>환경 설정</li>
        </NavLink>
      </nav>
    </div>
  )
}
