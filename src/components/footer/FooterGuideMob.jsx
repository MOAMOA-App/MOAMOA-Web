import React from 'react'
import style from './footer.module.css'

import emailIcon from '../../assets/images/footericon/emailIcon.png'
import githubIcon from '../../assets/images/footericon/githubIcon.png'
import notionIcon from '../../assets/images/footericon/notionIcon.png'

export default function FooterGuideMob() {
  return (
    <div className={style.footerBottomMob}>
      <div className={style.footerBotGuideContMob}>
          <ul>
            <li>공지사항</li>
            <li>이용안내</li>
            <li>창작자 가이드</li>
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
          </ul>
      </div>
      <div className={style.footerBottomIconContMob}>
          <a className='toMOAGithub' href="https://github.com/MOAMOA-App/MOAMOA-Web">
              <img className={style.headerLogo} src={githubIcon} alt="깃허브" />
          </a>
          <a className='toMOANotion' href="https://well-starflower-587.notion.site/164074c152f84edbb38267928e3b5060">
              <img className={style.headerLogo} src={notionIcon} alt="노션" />
          </a>
          <a className='toMOAEmail' href="">
              <img className={style.headerLogo} src={emailIcon} alt="이메일" />
          </a>
      </div>
    </div>
  )
}
