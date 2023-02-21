import React from 'react'
import style from "./homeCategory.module.css";

export default function homeCategory() {
    return (
    <>
        <div className={style.homeWebCatCont}>
            <div className={style.homeWebCatInfo}>
                <h2>카테고리</h2>
                <button>전체보기
                    <img src="./homeicon/next.png" alt="더보기" />
                </button>
            </div>
            <div className={style.homeWebCatCont1}>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat0All.png" alt="전체" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>전체</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat1Heart.png" alt="관심" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>관심</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat2Life.png" alt="생활" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>식품</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat3Cloth.png" alt="의류" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>생활</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat4Food.png" alt="식품" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>의류</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat5Appl.png" alt="가전" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>가전</span>
                    </div>
                </button>
            </div>

            <div className={style.homeWebCatCont1}>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat6Hobby.png" alt="취미" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>취미</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat7Exer.png" alt="운동" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>운동</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat8Goods.png" alt="굿즈" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>굿즈</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat9Pets.png" alt="동물" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>동물</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat10Oversea.png" alt="해외" />
                    </div>
                    <div className={style.homeWebCatLabelAll}>
                        <span>해외</span>
                    </div>
                </button>
                <button className={style.homeWebCatBtnAll}>
                    <div className={style.homeWebCatLabelAll}>
                        <img src="./categoryimage/cat11Etc.png" alt="기타" />
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
