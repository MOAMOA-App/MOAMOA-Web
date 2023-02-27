import React from 'react'
import style from './footer.module.css'

export default function FooterGuideWeb() {
    return (
        <div className={style.footerBottom}>
            <div className={style.footerBotGuideCont}>
                <div className={style.footerBottomGuide}>
                    <div className={style.footerBottomTitle}>공지사항</div>
                </div>
                
                <div className={style.footerBottomGuide}>
                    <div className={style.footerBottomTitle}>이용안내</div>
                    <ul>
                        <li>창작자 가이드</li>
                    </ul>
                </div>
                
                <div className={style.footerBottomGuide}>
                    <div className={style.footerBottomTitle}>정책</div>
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보 처리방침</li>
                    </ul>
                </div>
            </div>

            <div className={style.footerBottomIconCont}>
                <a className='toMOAGithub' href="https://github.com/MOAMOA-App/MOAMOA-Web">
                    <img className={style.headerLogo} src="./footericon/githubIcon.png" alt="깃허브" />
                </a>
                <a className='toMOANotion' href="https://well-starflower-587.notion.site/164074c152f84edbb38267928e3b5060">
                    <img className={style.headerLogo} src="./footericon/notionIcon.png" alt="노션" />
                </a>
                <a className='toMOAEmail' href="">
                    <img className={style.headerLogo} src="./footericon/emailIcon.png" alt="이메일" />
                </a>
            </div>
        </div>
    )
}
