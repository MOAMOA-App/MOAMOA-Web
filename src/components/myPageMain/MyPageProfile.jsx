import React from 'react'
import style from './myPageMain.module.css'
export const MyPageProfile = (props) => {
  return (
    <div className={style.InnerDiv}>
      <div style={{marginBottom : "30px"}}>
        <p className={style.Subject}>내 프로필</p>
        <table className={style.profileTable}>
          <tbody>
            <tr>
              <td style={{width:"150px"}} colSpan="2">
                프로필 사진
                <br/><br/>
                <img 
                  style={{
                    width : "100px", 
                    height : "100px",
                    border : "1px solid lightgray",
                    borderRadius : "50%"
                  }}
                />
              </td>
              <td><button>변경</button></td>
            </tr>
            <tr>
              <td style={{width:"150px"}}>닉네임</td>
              <td style={{width:"150px"}}>초록개구리</td>
              <td><button>변경</button></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td style={{width:"150px"}}>example@google.com</td>
              <td>구글 연동 중</td>
            </tr>
            <tr>
              <td>지역</td>
              <td>미설정</td>
              <td><button>설정</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p className={style.Subject}>계정 정보</p>
      </div>
      <table  className={style.profileTable}>
        <tbody>
          <tr>
            <td style={{width:"150px"}}>현재 비밀번호</td>
            <td style={{width:"150px"}}><input type="text"/></td>
          </tr>
          <tr>
            <td>새 비밀번호</td>
            <td><input type="text"/></td>
          </tr>
          <tr>
            <td>새 비밀번호 확인</td>
            <td><input type="text"/></td>
            <td><button>수정</button></td>
          </tr>
        </tbody>
      </table>
      
    </div>

  )
}
