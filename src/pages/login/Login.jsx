import React from 'react'
import style from "./login.module.css";
import { useMediaQuery } from 'react-responsive'
import LoginCont from '../../components/login/LoginCont.jsx'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 })
  return isMobile ? children : null
}

export default function Login() {
  return (
    <>
      <Desktop>
        <div className={style.login}>
          <LoginCont/>
          <div className={style.loginImageCont}>
            <img className={style.loginImage} src="./icon.png" alt="머리 위에 귤이 있는 고양이"></img>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className={style.login}>
          <LoginCont/>
        </div>
      </Mobile>
    </>
  )
}
