import React from 'react'
import style from "./homeList.module.css";

export default function homeListLatest() {
    return (
        <>
        <div className={style.homeWebListCont}>
            <div className={style.homeWebInfo}>
                <h2>신규 공동구매</h2>
                <button>전체보기</button>
            </div>
            <div className={style.homeWebLatestCont}>
                    
            </div>
        </div>
        </>
    )
}
