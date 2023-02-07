import React from 'react'
import style from './upload.module.css'
export default function Upload() {
    return (
        <div className={style.wrap}>
            <button className={style.btn_upload}>업로드</button>
            <img src="" alt="" />
            <span className={style.span_upload} >상품명</span>
            <input type="text" name="" id="" />
            <span className={style.span_upload}>카테고리</span>
            <select name="" id=""></select>
            <span className={style.span_upload}>상품 설명</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <span className={style.span_upload}>상품가격</span>
        <div>
            <input type="number" name="" id="" />
            <input type="checkbox" name="" id="" />
        </div>
            <span className={style.span_upload}>모집인원</span>
            <input className={style.inp_people} type="number" name="" id="" />
            <span className={style.span_upload}>주소입력</span>
            <div>

            <input className={style.address} type="text" name="" id="" />
            <button className={style.btn_search}>찾기</button>
            </div>
            <input type="text" name="" id="" />
            <div>지도</div>
        </div>
    )
}
