import React from 'react'
import style from "./homeList.module.css";
import ProductCard from '../product/ProductCard';
import HomeListCardBundle from './HomeListCardBundle';

export default function homeListLatest() {
    return (
        <>
            <div className={style.homeWebInfo}>
                <div className={style.homeWebInfoTitleCont}>
                    <span>마감이 가까워요</span>
                    <h2>신규 공동구매</h2>
                </div>
                <a href="/productlist">
                    <button>
                        전체보기
                        <img src="https://www.noticons.com/icon/bn8R/FA8F39/FFFEFE" alt="더보기" />
                    </button>
                </a>
            </div>
        </>
    )
}
