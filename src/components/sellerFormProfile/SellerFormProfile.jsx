import React from 'react'
import style from './SellerFormProfile.module.css'
export const SellerFormProfile = (props) => {
    return (
        <div 
            style={{
              display : "flex",
              paddingRight : "20px",
              margin : "0 0 20px 0"
            }}
        >
          <img 
            style={{
              width : "192px",
              height : "144px",
              marginRight : "15px",
              background : "lightgray",
              border : "1px solid lightgray",
              borderRadius : "25px"
            }}
          />
          <div style={{flex : "auto"}}>
            <table className={style.formProfile}>
              <thead>
                <tr>
                  <th colSpan={4}>
                    [상태] 생성한 공동구매 제목
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{width : "80px",minWidth : "80px"}} >인원 수</th>
                  <td style={{minWidth : "130px"}}>30명</td>
                  <td style={{minWidth : "130px"}}>10명</td>
                  <td style={{minWidth : "80px"}}>20명</td>
                </tr>
                <tr>
                  <th>모인 금액</th>
                  <td>45,000원</td>
                  <td>40,500원</td>
                  <td>4,500원</td>
                </tr>
                <tr>
                  <th>마감 기한</th>
                  <td>2023년 01월 02일</td>
                  <td>2023년 01월 13일</td>
                  <td>3일 남음</td>
                </tr>
                <tr>
                  <th>직거래</th>
                  <td colSpan={3}>수원역 11번 출구 옆 로데오 거리</td>
                </tr>
              </tbody>
            </table>
            {/**
              <p className={style.formProfileText}>[상태] 생성한 공동구매 제목</p>
              <p className={style.formProfileText}>필요 인원 : 30 명 / 참여 인원 : 10명</p>
              <p className={style.formProfileText}>총 모음 금액 : 45,000원/ 40,500원 </p>
              <p className={style.formProfileText}>기한 : 2023.01.02 ~ 2023.01.13</p>
              <p className={style.formProfileText}>직거래 : 수원역 11번 출구 앞</p>
            */}
          </div>
        </div>
   ) 
}
