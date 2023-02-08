import React from 'react'
import style from './myPageMain.module.css'
export const MyPageCreated = (props) => {
  return (
    <div className={style.InnerDiv}>
      <p className={style.Subject }>생성한 공동구매</p>
      <div style={{ display : "flex", margin : "20px 0 15px 0"}}>
        <div className={style.searchDiv}>
          조회&nbsp;
          <input className={style.input} type="text"/>
        </div>
        <div>
          <button>공동구매 시작하기</button>
        </div>
      </div>
      <div>
        <div style={{display : "flex"}} className={style.properties}>
          <p style={{width:"60px" }}>항목</p>
          <p style={{flex :"auto" }}>제목</p>
          <p style={{width:"170px"}}>기한</p>
          <p style={{width:"100px"}}>참여</p>
          <p style={{width:"60px" }}>관리</p>
        </div>
        <table className={style.formTable}>
          <thead>
            <tr>
              <td style={{width:"60px" }}></td>
              <td ></td>
              <td style={{width:"170px"}}></td>
              <td style={{width:"100px"}}></td>
              <td style={{width:"60px" }}></td>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
            <tr >
              <td>식품</td>
              <td>제목</td>
              <td>23.01.01 ~ 23.02.29</td>
              <td>990/999</td>
              <td>관리</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{margin: "10px 0 5px 0",textAlign:"center"}}> &lt; 1 &gt;</div>
    </div>
  )
}
