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
            <div>
                <p className={style.sellerMenuH}>공동구매 관리</p>
                <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/seller/">
                    <p className={style.sellerMenuP}>판매 재고 현황</p>
                </NavLink>
                <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/seller/party">
                    <p className={style.sellerMenuP}>참여자 관리</p>
                </NavLink>
                <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/seller/notice">
                    <p className={style.sellerMenuP}>공지사항 관리</p>
                </NavLink>
                <NavLink className={({isActive}) => (isActive? style.selected : "")+` ${style.navmenu}`} to="/seller/edit">
                    <p className={style.sellerMenuP}>게시글 수정</p>
                </NavLink>
            </div>
            
        </div>
    )
}
