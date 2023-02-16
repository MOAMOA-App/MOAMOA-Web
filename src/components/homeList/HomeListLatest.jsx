import React from 'react'
import style from "./homeList.module.css";

export default function homeListLatest() {
    return (
        <>
        <div className={style.homeWebListCont}>
            <div className={style.homeWebInfo}>
            <div className={style.homeWebInfoTitleCont}>
                    <span>마감이 가까워요</span>
                    <h2>신규 공동구매</h2>
                </div>
                <button>전체보기
                    <img src="./homeicon/next.png" alt="더보기" />
                </button>
            </div>
            <div className={style.homeWebLatestCont}>
                    
            </div>
        </div>
        </>
    )
}
