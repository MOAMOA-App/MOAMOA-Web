import React from 'react'
import style from "./productDetail.module.css";
import ProductBundle from '../../components/product/ProductBundle'


//게시글 4개 묶음
export default function ProductDetail() {
    return (
        <>
            <div className={style.main}>
                <div className={style.productDetail}>
                    <div className={style.productImg}>
                        <img className={style.mainImg} src='./Frame 7.png' alt="이미지1" />
                        <div className={style.smallImgFrame}>
                            <div className={style.smallImgList}>
                                <img className={style.smallImg} src='./Frame 7.png' alt="이미지1" />
                                <img className={style.smallImg} src='./Frame 7.png' alt="이미지1" />
                                <img className={style.smallImg} src='./Frame 7.png' alt="이미지1" />
                                <img className={style.smallImg} src='./Frame 7.png' alt="이미지1" />
                                <img className={style.smallImg} src='./Frame 7.png' alt="이미지1" />
                            </div>
                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.name}>
                            <p className={style.nameText}>개구리 인형 같이 사실 분</p>
                        </div>
                        <div className={style.cateFrame}>
                            <div className={style.cate}>
                                <p className={style.cateText}> 생활</p>
                            </div>
                            <div className={style.cate}>
                                <p className={style.cateText}> 직거래/대면</p>
                            </div>
                        </div>
                        <div className={style.detailInfo}>
                            
                            <div className={style.stateFrame}>
                                <div className={style.state}>
                                    <p className={style.stateText}>상태</p>
                                </div>
                                <div className={style.detailFrame}>
                                    <p className={style.detailText}>:참여 모집 중</p>
                                </div>
                            </div>
                            <div className={style.stateFrame}>
                                <div className={style.state}>
                                    <p className={style.stateText}>모집 인원</p>
                                </div>
                                <div className={style.detailFrame}>
                                    <p className={style.detailText}>:10명(현재 5명 참여 중)</p>
                                </div>
                            </div>
                            <div className={style.stateFrame}>
                                <div className={style.state}>
                                    <p className={style.stateText}>금액</p>
                                </div>
                                <div className={style.detailFrame}>
                                    <p className={style.detailText}>:인 당 20,000원</p>
                                </div>
                            </div>
                            <div className={style.stateFrame}>
                                <div className={style.state}>
                                    <p className={style.stateText}>참여 기간</p>
                                </div>
                                <div className={style.detailFrame}>
                                    <p className={style.detailText}>:23년 9월 30일 ~ 23년 11월 11일</p>
                                </div>
                            </div>
                            <div className={style.stateFrame}>
                                <div className={style.state}>
                                    <p className={style.stateText}>위치</p>
                                </div>
                                <div className={style.detailFrame}>
                                    <p className={style.detailText}>:강남역 2번 출구</p>
                                </div>
                            </div>
                            <div className={style.mapFrame}>
                                <img className={style.map} src='./Frame 7.png' alt="지도" /> 
                            </div>
                            <div className={style.buttons}>
                                <div className={style.btn}>
                                    <div className={style.heartFrame}>
                                        <img className={style.heart} src='https://www.noticons.com/icon/w9X2/274E13/' alt="찜하기" />
                                    </div>
                                </div>
                                <div className={style.btn}>
                                    <div className={style.heartFrame}>
                                        <img className={style.heart} src='https://www.noticons.com/icon/zAK/274E13/' alt="채팅하기" />
                                    </div>
                                </div>
                                <div className={style.mainBtn}>
                                    <p className={style.mainBtnText}>참여하기</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.contents}>
                    <p className={style.contentsText}>개구리인형 같이사실분
                        10명 모이면 시작하고 해외배송이라 1차금 2만원 받고 2차금 해배비 받아요
                        날짜 정해서 직거래 예정이고 안되시는 분들은 준등기비 1800원 추가로 받을게요</p>
                </div>
                <div className={style.seeMore}>
                    <p className={style.seeMoreText}>공지</p>
                </div>
                <div className={style.seeMore}>
                    <p className={style.seeMoreText}>공동구매 더보기</p>
                    <div className={style.productList}>
                        <ProductBundle/>
                    </div>
                </div>
            </div>
        </>
    )

}