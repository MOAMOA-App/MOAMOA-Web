import React from 'react'
import style from "./signup.module.css";

export default function SignUp() {
  return (
      <div className={style.signUpCont}>
        <h2>회원가입</h2>
        
        <div className={style.signUpInput}>
          <label for="signUpInputEmail">이메일</label>
          <input id="signUpInputEmail" type="text"></input>

          <label for="signUpInputName">이름</label>
          <input id="signUpInputName" type="text"></input>

          <label for="signUpInputPw">비밀번호</label>
          <input id="signUpInputPw" type="text"></input>

          <label for="signUpInputPwCheck">비밀번호 확인</label>
          <input id="signUpInputPwCheck" type="text"></input>

          <div className={style.signUp}>
            <input id="signUpInputCB" type="checkbox"></input>
            <span>개인정보 수집 동의</span>
          </div>
        </div>
        
        <button className={style.signUpBtn}>회원가입</button>
      </div>
  )
}
