import React from 'react'
import style from "./homeList.module.css";

export default function homeListDeadLine() {
    return (
        <>
        <div className={style.homeWebListCont}>
            <div className={style.homeWebInfo}>
                <div className={style.homeWebInfoTitleCont}>
                    <span>마감이 가까워요</span>
                    <h2>마감임박</h2>
                </div>
                <button>
                    전체보기
                    <img src="./homeicon/next.png" alt="더보기" />
                </button>
            </div>
            <div className={style.homeWebDLCont}>
                    
            </div>
        </div>
        </>
    )
}
