import React from 'react'
import style from './MyPageMenu.module.css'
export default function MyPageMenu() {
  return (
    <div 
      style={{
        width : "150px",
        paddingLeft  : "20px",
        paddingRight : "20px"
      }}
    >
      <div>
        <p className={style.myMenuH}>내 활동</p>
        <p className={style.myMenuP}>생성한 공동구매</p>
        <p className={style.myMenuP}>참여한 공동구매</p>
        <p className={style.myMenuP}>관심 공동구매</p>
      </div>
      <div>
        <p className={style.myMenuH}>내 정보</p>
        <p className={style.myMenuP}>내 프로필</p>
        <p className={style.myMenuP}>알림 설정</p>
        <p className={style.myMenuP}>환경 설정</p>
      </div>
    </div>
  )
}
