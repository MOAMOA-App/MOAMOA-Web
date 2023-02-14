import React from 'react'
import style from "./login.module.css";

export default function Login() {
  return (
    <div className={style.login}>
      <div className={style.loginCont1}>
        <div className={style.loginCont2}>
          <div className={style.loginEmailCont}>
            <label for="loginInputEmail">이메일</label>
            <input id="loginInputEmail" type="text"></input>

            <label for="loginInputPw">비밀번호</label>
            <input id="loginInputPw" type="password"></input>

            <button className={style.loginEmailBtn}>로그인</button>
          </div>

          <div className={style.loginSnsCont}>
            <button className={style.loginSnsKakao}>
              <img className={style.loginSnsKakaoImg} src="../loginsnsimage/kakaoIcon.png" alt="" />
              카카오톡 계정으로 로그인
              </button>
            <button className={style.loginSnsGoogle}>
              <img className={style.loginSnsGoogleImg} src="../loginsnsimage/googleIcon.png" alt="" />
              구글 계정으로 로그인
              </button>
            <button className={style.loginSnsNaver}>
              <img className={style.loginSnsNaverImg} src="../loginsnsimage/NaverIcon.png" alt="" />
              네이버 계정으로 로그인
              </button>
          </div>
          
          <div className={style.loginEtc}>

            <a className='findIdPw' href="">
              <span>아이디/비밀번호 찾기</span>
            </a>

            <span> | </span>

            <a className='joinMOAMOA' href="/signup">
              <span>회원가입</span>
            </a>
          </div>
        </div>
      </div>

      
      <div className={style.loginImageCont}>
        <img className={style.loginImage} src="./icon.png" alt="머리 위에 귤이 있는 고양이"></img>
      </div>
    </div>
  )
}
