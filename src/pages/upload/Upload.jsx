import React from 'react'
import style from './upload.module.css'
export default function Upload() {
    return (
        <div className={style.wrap}>
            <button>업로드</button>
            <img src="" alt="" />
            <span>상품명</span>
            <input type="text" name="" id="" />
            <span>카테고리</span>
            <select name="" id=""></select>
            <span>상품명</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <span>상품가격</span>
            <input type="text" name="" id="" />
            <input type="checkbox" name="" id="" />
            <span>모집인원</span>
            <input type="text" name="" id="" />
            <span>주소입력</span>
            <input type="text" name="" id="" />
            <button>이름</button>
            <input type="text" name="" id="" />
            <div>지도</div>
        </div>
    )
}
