import React from 'react'
import style from './headerMobile.module.css'

export default function HeaderMobile() {
  return (
    <div className={style.headerMobileWhole}>
        <div className={style.HeaderMobIconCont}>
          <img src="./headericon/menuMobile.png" alt="" />
        </div>

        <div className={style.HeaderMobLogoCont}>
          <img src="./iconLogo.png" alt="" />
        </div>

        <div className={style.HeaderMobIconCont}>
          <img src="./headericon/search.png" alt="" />
        </div>
    </div>
  )
}
