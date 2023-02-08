import React from 'react'
import style from "./homeCategory.module.css";

export default function homeCategory() {
    return (
    <>
        <div className={style.homeWebCatCont}>
            <div className={style.homeWebCatInfo}>
                <h2>카테고리</h2>
                <button>전체보기</button>
            </div>
            <div className={style.homeWebCatCont1}>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat0.png" alt="전체" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>전체</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat1.png" alt="관심" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>관심</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat2.png" alt="식품" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>식품</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat3.png" alt="생활" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>생활</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat4.png" alt="의류" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>의류</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat5.png" alt="가전" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>가전</span>
                    </div>
                </button>
            </div>

            <div className={style.homeWebCatCont1}>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat6.png" alt="취미" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>취미</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat7.png" alt="운동" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>운동</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat8.png" alt="굿즈" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>굿즈</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat9.png" alt="동물" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>동물</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat11.png" alt="해외" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>해외</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/Cat10.png" alt="기타" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>기타</span>
                    </div>
                </button>
            </div>
            
        </div>
        </>
    )
}
