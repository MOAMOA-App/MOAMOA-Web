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
      <div>
        <p className={style.myMenuH}>내 활동</p>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/created">
          <p className={style.myMenuP}>생성한 공동구매</p>
        </NavLink>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/party">
          <p className={style.myMenuP}>참여한 공동구매</p>
        </NavLink>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/heart">
          <p className={style.myMenuP}>관심 공동구매</p>
        </NavLink>
      </div>
      <div>
        <p className={style.myMenuH}>내 정보</p>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/">
          <p className={style.myMenuP}>내 프로필</p>
        </NavLink>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/alarm">
          <p className={style.myMenuP}>알림 설정</p>
        </NavLink>
        <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/mypage/setting">
          <p className={style.myMenuP}>환경 설정</p>
        </NavLink>
      </div>
    </div>
  )
}
