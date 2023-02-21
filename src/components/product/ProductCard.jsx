import React from 'react'
import style from "./product.module.css";

//게시글 하나
export default function ProductCard() {
    return (
        <>
            <div className={style.productCard}>
                <img className={style.productImg} src='./Frame 7.png' alt="이미지1" />
                <div className={style.productContext}>
                    <div className={style.productContext2}>
                        <div className={style.productTop}>
                            <div className={style.productAreaFrame}>
                                <p className={style.productArea} >식품 | 사당역</p>
                            </div>
                            <div className={style.productPeopleNumFrame}>
                                <p className={style.productPeopleNum}>10/10명 참여</p>
                            </div>
                        </div>
                        <p className={style.productNameFrame}>밀양얼음골사과</p>
                        <div className={style.productBottom}>
                            <p className={style.productDay}>D-31</p>
                            <button className={style.productHeartFrame}>
                                <img className={style.productHeart} src='https://www.noticons.com/icon/w9X2/000000/' alt='heart' ></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}