import React from 'react'
import style from './footer.module.css'
import { useMediaQuery } from 'react-responsive'

import FooterGuideWeb from './FooterGuideWeb'
import FooterGuideMob from './FooterGuideMob'

import iconLogo from '../../assets/images/iconLogo.png'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

export default function Footer() {
  return (
    <div className={style.footerWhole}>
      
      <hr/>
      
        <div className={style.footerChild}>

          <Desktop>
            <FooterGuideWeb />
          </Desktop>

          <Mobile>
            <FooterGuideMob />
          </Mobile>

          <div className={style.footerMOAGuide}>
            <span>
              모아모아는 플랫폼 제공자로서 공동구매의 당사자가 아니며, 공동구매를 직접 진행하지 않습니다. 
              각 공동구매의 완수 및 상품 전달의 책임은 해당 공동구매 진행자에게 있으며,
              공동구매와 관련하여 참여자와 발생하는 법적 분쟁에 대한 책임은 진행자가 부담합니다.
            </span>
          </div>

        </div>

      <div className={style.footerLogoCont}>
        <img src={iconLogo} alt="로고" />
      </div>
      
    </div>
  )
}
