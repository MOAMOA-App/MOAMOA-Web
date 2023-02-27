import React from 'react'
import style from "./homeList.module.css";
import ProductBundle from '../product/ProductBundle.jsx'

export default function homeListPopular() {
    return (
        <>
        <div className={style.homeWebListCont}>
            <div className={style.homeWebInfo}>
            <div className={style.homeWebInfoTitleCont}>
                    <span>마감이 가까워요</span>
                    <h2>인기순</h2>
                </div>
                <a href="/productlist">
                    <button>
                        전체보기
                        <img src="./homeicon/next.png" alt="더보기" />
                    </button>
                </a>
            </div>
            <div className={style.homeWebPopCont}>
                <ProductBundle/>
            </div>
        </div>
        </>
    )
    }
