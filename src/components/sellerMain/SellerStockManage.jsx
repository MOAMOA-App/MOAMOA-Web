import React from 'react'
import { SellerFormProfile } from '../sellerFormProfile/SellerFormProfile'
import style from './sellerMain.module.css'
export const SellerStockManage = (props) => {
    return (
        <div className={style.InnerDiv}>
            <h2 className={style.Subject}>판매 재고 현황</h2>
            <div className={style.InnerDiv}>
                <SellerFormProfile/>
                <div>
                    <div style={{display : "flex"}} className={style.properties}>
                        <p style={{flex :"auto" }}>항목</p>
                        <p style={{width:"130px"}}>가격</p>
                        <p style={{width:"100px"}}>모집 개수</p>
                        <p style={{width:"100px"}}>잔여 개수</p>
                        <p style={{width:"60px" }}>상태</p>
                    </div>
                    <table className={style.formTable}>
                    <thead>
                        <tr>
                            <td ></td>
                            <td style={{width:"130px" }}></td>
                            <td style={{width:"100px" }}></td>
                            <td style={{width:"100px" }}></td>
                            <td style={{width:"60px"  }}></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                        <td>뜨개구리 의상 도안 1</td>
                        <td>5,000원</td>
                        <td>제한 없음</td>
                        <td>90</td>
                        <td>관리</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div style={{margin: "10px 0 5px 0",textAlign:"center"}}> &lt; 1 &gt;</div>
            </div>
            
        </div>
    )
}
