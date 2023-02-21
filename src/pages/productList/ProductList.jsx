import React from 'react'
import ProductBundle from '../../components/product/ProductBundle'
import style from "./productlist.module.css";


//게시글 목록 화면
export default function ProductList() {
    return (
        <>
        
            <div className={style.entire}>
                <div className={style.menuBar}>
                    <div className={style.menu}>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>전체</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>식품</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>생활</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>의류</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>가전</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>취미</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>운동</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>굿즈</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>동물</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>기타</p>
                        </button>
                        <button className={style.menuTextFrame}>
                            <p className={style.menuText}>해외</p>
                        </button>
                        {/* <button className={style.menuTextFrame2}>
                            <p className={style.menuText}>etc</p>
                        </button> */}
                    </div>
                    <button className={style.menuArrowFrame}>
                        <img className={style.menuArrow} src='https://www.noticons.com/icon/eNE/000000/'></img>
                    </button>
                </div>
                <div className={style.main}>
                    <div className={style.option}>
                        <div className={style.optionFrame}>
                            <div className={style.optionTextFrame}>
                                <p className={style.optionText}>진행 상태</p>
                                <button className={style.optionArrow}>
                                    <img className={style.menuArrow} src='https://www.noticons.com/icon/NlBe/667479/'></img>
                                </button>
                            </div>
                            <div className={style.optionTextFrame}>
                                <p className={style.optionText}>인기순</p>
                                <button className={style.optionArrow}>
                                    <img className={style.menuArrow} src='https://www.noticons.com/icon/NlBe/667479/'></img>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={style.lists}>
                        <ProductBundle/>
                        <ProductBundle/>
                        <ProductBundle/>
                        <ProductBundle/>
                    </div>
                </div>
            </div>
        </>
    )

}
