import React from 'react'
import style from "./homeList.module.css";

export default function homeListPopular() {
    return (
        <>
        <div className={style.homeWebListCont}>
            <div className={style.homeWebInfo}>
                <h2>인기순</h2>
                <button>전체보기</button>
            </div>
            <div className={style.homeWebPopCont}>
                    
            </div>
        </div>
        </>
    )
    }
