import React from 'react'
import style from './upload.module.css'

export default function Upload() {
    return (
        <div className={style.wrap}>
            <button className={style.btn_upload}>업로드</button>
            <div className={style.wrap_img}>
                <div className={style.cont_img}>
                    <img src="" alt="" />
                </div>
                <div className={style.cont_img}>
                    <img src="" alt="" />
                </div>
                <div className={style.cont_img}>
                    <img src="" alt="" />
                </div>
            </div>
            <span className={style.span_upload} >상품명</span>
            <input  className={style.input_upload}  type="text" name="" id="" />
            <span className={style.span_upload}>카테고리</span>
            <select className={style.select_upload} name="" id=""></select>
            <span className={style.span_upload}>상품 설명</span>
            <textarea  className={style.input_upload} name="" id="" cols="30" rows="10"></textarea>
            <span className={style.span_upload}>상품가격</span>
        <div>
            <input  className={style.input_upload} type="number" name="" id="" />
            <span className={style.won_upload}>원</span>            
            <input type="checkbox" name="" id="price" />
            <label htmlFor="price">가격제한없음</label>
        </div>
            <span className={style.span_upload}>모집인원</span>
            <div>
                <input className={style.inp_people} type="number" name="" id="" />
                <span>명</span>
            </div>
            <span className={style.span_upload}>주소입력</span>
            <div>

            <input className={style.address} type="text" name="" id="" />
            <button className={style.btn_search}>찾기</button>
            </div>
            <input className={style.address}  type="text" name="" id="" />
            <div>지도</div>
        </div>
    )
}
