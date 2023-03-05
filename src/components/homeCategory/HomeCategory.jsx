import React from 'react'
import style from "./homeCategory.module.css";

import cat0All from '../../assets/images/categoryimage/cat0All.png'
import cat1Heart from '../../assets/images/categoryimage/cat1Heart.png'
import cat2Life from '../../assets/images/categoryimage/cat2Life.png'
import cat3Cloth from '../../assets/images/categoryimage/cat3Cloth.png'
import cat4Food from '../../assets/images/categoryimage/cat4Food.png'
import cat5Appl from '../../assets/images/categoryimage/cat5Appl.png'
import cat6Hobby from '../../assets/images/categoryimage/cat6Hobby.png'
import cat7Exer from '../../assets/images/categoryimage/cat7Exer.png'
import cat8Goods from '../../assets/images/categoryimage/cat8Goods.png'
import cat9Pets from '../../assets/images/categoryimage/cat9Pets.png'
import cat10Oversea from '../../assets/images/categoryimage/cat10Oversea.png'
import cat11Etc from '../../assets/images/categoryimage/cat11Etc.png'

export default function homeCategory() {
    return (
    <>
        <div className={style.homeWebCatCont}>
            <div className={style.homeWebCatInfo}>
                <h2>카테고리</h2>                
            </div>

            <div className={style.homeWebCatContWL}>

                <div className={style.homeWebCatContC}>
                    <button className={style.homeWebCatBtnAll}>
                        <a href="/productlist">
                            <div className={style.homeWebCatLabelAll}>
                                <img src={cat0All} alt="전체" />
                            </div>
                            <div className={style.homeWebCatLabelAll}>
                                <span>전체</span>
                            </div>
                        </a>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat1Heart} alt="관심" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>관심</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat2Life} alt="생활" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>식품</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat3Cloth} alt="의류" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>생활</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat4Food} alt="식품" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>의류</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat5Appl} alt="가전" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>가전</span>
                        </div>
                    </button>
                </div>

                <div className={style.homeWebCatContC}>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat6Hobby} alt="취미" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>취미</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat7Exer} alt="운동" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>운동</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat8Goods} alt="굿즈" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>굿즈</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat9Pets} alt="동물" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>동물</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat10Oversea} alt="해외" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>해외</span>
                        </div>
                    </button>
                    <button className={style.homeWebCatBtnAll}>
                        <div className={style.homeWebCatLabelAll}>
                            <img src={cat11Etc} alt="기타" />
                        </div>
                        <div className={style.homeWebCatLabelAll}>
                            <span>기타</span>
                        </div>
                    </button>
                </div>
                
            </div>
        </div>
        </>
    )
}
