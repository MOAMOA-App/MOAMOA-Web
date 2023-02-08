import React from 'react'
import style from './sellerMain.module.css'
import { SellerFormProfile } from '../sellerFormProfile/SellerFormProfile'
export const SellerPartyManage = (props) => {
    return (
        <div className={style.InnerDiv}>
            <h2 className={style.Subject}>참여자 관리</h2>
            <div className={style.InnerDiv}>
                <SellerFormProfile/>
                <div>
                    <div style={{display : "flex"}} className={style.properties}>
                        <p style={{width:"120px"}}>이름</p>
                        <p style={{flex :"auto" }}>항목</p>
                        <p style={{width:"80px" }}>개수</p>
                        <p style={{width:"120px"}}>금액</p>
                        <p style={{width:"150px"}}>참여일</p>
                        <p style={{width:"60px" }}>관리</p>
                    </div>
                    <table className={style.formTable}>
                    <thead>
                        <tr>
                        <td style={{width:"120px"}}></td>
                        <td ></td>
                        <td style={{width:"80px" }}></td>
                        <td style={{width:"120px"}}></td>
                        <td style={{width:"150px"}}></td>
                        <td style={{width:"60px" }}></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                        <td>닉네임어쩌고</td>
                        <td>항목 뭐뭐뭐 </td>
                        <td>30개</td>
                        <td>150,000원</td>
                        <td>23년 1월 10일</td>
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
