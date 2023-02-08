import React from 'react'
import {NavLink} from 'react-router-dom';
import style from './sellerMenu.module.css'
export const SellerMenu = (props) => {
    return(
        <div 
            style={{
            minWidth : "150px",
            width : "150px",
            paddingLeft  : "20px",
            paddingRight : "20px"
            }}
        >
            <nav>
                <h1 className={style.sellerMenuH}>공동구매 관리</h1>
                <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/seller/">
                    <li className={style.sellerMenuP}>판매 재고 현황</li>
                </NavLink>
                <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/seller/party">
                    <li className={style.sellerMenuP}>참여자 관리</li>
                </NavLink>
                <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/seller/notice">
                    <li className={style.sellerMenuP}>공지사항 관리</li>
                </NavLink>
                <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/seller/edit">
                    <li className={style.sellerMenuP}>게시글 수정</li>
                </NavLink>
            </nav>
            
        </div>
    )
}
