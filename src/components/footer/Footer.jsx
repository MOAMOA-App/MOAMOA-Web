import React from 'react'
import style from './footer.module.css'

export default function Footer() {
  return (
    <div className={style.footerWhole}>
      <nav className={style.footerNav}>
        <a className='toMOAWebHome' href="/">
          <span>홈</span>
        </a>
        <a className='toMOAWebListPopular' href="/">
          <span>인기순</span>
        </a>
        <a className='toMOAWebHomeListDeadLine' href="/">
          <span>마감순</span>
        </a>
        <a className='toMOAWebHomeListLatest' href="/">
          <span>최신순</span>
        </a>
        
      </nav>

      <hr/>

      <div className={style.footerBottom}>
        <div className={style.footerBottomNotice}>
          <div className={style.footerBottomTitle}>공지사항</div>
        </div>
        <div className={style.footerBottomGuide}>
          <div className={style.footerBottomTitle}>이용안내</div>
          <ul>
            <li>창작자 가이드</li>
          </ul>
        </div>
        <div className={style.footerBottomPolicy}>
        <div className={style.footerBottomTitle}>정책</div>
          <ul>
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
          </ul>
        </div>

        <div className={style.footerBottomIcons}>
          <a className='toMOAGithub' href="/">
            <img className={style.headerLogo} src="./footericon/githubIcon.png" alt="깃허브" />
          </a>
          <a className='toMOAGithub' href="/">
            <img className={style.headerLogo} src="./footericon/notionIcon.png" alt="노션" />
          </a>
          <a className='toMOAGithub' href="/">
            <img className={style.headerLogo} src="./footericon/emailIcon.png" alt="이메일" />
          </a>
          
          
        </div>
      </div>

      <div className={style.footerLogoCont}>
        <img src="./iconLogo.png" alt="로고" />
      </div>
      
    </div>
  )
}
