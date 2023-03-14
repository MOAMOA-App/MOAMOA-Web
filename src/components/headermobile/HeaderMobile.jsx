import React from 'react'
import style from './headerMobile.module.css'

import iconLogo from '../../assets/images/iconLogo.png'

import menuMobile from '../../assets/images/headericon/menuMobile.png'
import search from '../../assets/images/headericon/search.png'

export default function HeaderMobile() {
  return (
    <div className={style.headerMobileWhole}>
        <div className={style.HeaderMobIconCont}>
          <img src={menuMobile} alt="모바일메뉴" />
        </div>

        <div className={style.HeaderMobLogoCont}>
          <a href="/">
            <img src={iconLogo} alt="로고" />
          </a>
        </div>

        <div className={style.HeaderMobIconCont}>
          <img src={search} alt="검색" />
        </div>
    </div>
  )
}
