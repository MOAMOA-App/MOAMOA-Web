import React from 'react'
import style from './SellerMain.module.css'
import { SellerFormProfile } from '../sellerFormProfile/SellerFormProfile'
export const SellerNoticeManage = (props) => {
    return (
        <div className={style.InnerDiv}>
            <p className={style.Subject}>공지사항 관리</p>
            <div className={style.InnerDiv}>
                <SellerFormProfile/>
                <div>
                    <div style={{display : "flex"}} className={style.properties}>
                        <p style={{width:"150px"}}>등록일</p>
                        <p style={{flex :"auto" }}>내용</p>
                        <p style={{width:"60px" }}>조회수</p>
                        <p style={{width:"100px"}}>공개</p>
                        <p style={{width:"60px" }}>관리</p>
                    </div>
                    <table className={style.formTable}>
                    <thead>
                        <tr>
                        <td style={{width:"150px"}}></td>
                        <td ></td>
                        <td style={{width:"60px" }}></td>
                        <td style={{width:"100px"}}></td>
                        <td style={{width:"60px" }}></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                        <td>22년 1월 10일</td>
                        <td>
                            내요오오오오오오오옹
                        </td>
                        <td>23</td>
                        <td>전체 공개</td>
                        <td>수정</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div style={{margin: "10px 0 5px 0",textAlign:"center"}}> &lt; 1 &gt;</div>
            </div>
            
        </div>
    )
}