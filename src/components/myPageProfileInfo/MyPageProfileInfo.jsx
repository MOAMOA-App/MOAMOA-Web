import React from 'react'
import style from './myPageProInfo.module.css'
export default function MyPageProfileInfo() {
  return (
      <div 
        style={{
          height : "150px",
          display : "flex",
          alignItems : "center",
          padding : "10px 30px",
          marginBottom : "15px",
          borderBottom : "1px solid lightgray"
        }}
      >
        <img 
          style={{
            width : "120px", 
            height : "120px",
            border : "1px solid lightgray",
            borderRadius : "50%"
          }}
        >

        </img>
        <div
          style = {{
            display : "flex",
            flex : "1 1 auto"
          }}
        >
          <div
            style={{
              flex : "1 1 auto", 
              paddingLeft : "20px"
            }}
          >
            <p className={style.profileName}>초록 개구리</p>
            <div className={style.flexdiv}>
              <div className={style.flexdiv}
                style={{
                  width : "300px",
                  height : "auto",
                  borderRight : "1px solid gray",
                }}
              >
                <p className={style.profileinfo}>이메일</p>
                <p className={style.profileinfo}>example@google.com</p>
              </div>
              <div className={style.flexdiv}>
                <p className={style.profileinfo}>&nbsp;지역</p>
                <p className={style.profileinfo}>경기도 수원시 팔달구</p>
              </div>
            </div>
          </div>
          <div>
            <button>로그아웃</button>
          </div>
          
        </div>
      </div>
  )  
}
