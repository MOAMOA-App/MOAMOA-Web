import React from 'react'
import style from "./homeList.module.css";

export default function homeListDeadLine() {
    return (
        <>
        <div className={style.homeWebListCont}>
            <div className={style.homeWebInfo}>
                <h2>마감임박</h2>
                <button>전체보기</button>
            </div>
            <div className={style.homeWebDLCont}>
                    
            </div>
        </div>
        </>
    )
}
