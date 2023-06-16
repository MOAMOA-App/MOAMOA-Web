import React from 'react'
import styled from 'styled-components';

export default function ProfileMenu() {
  return (
    <Wrap>
    <WrapProfile>
      <ContProfile>
        <img src="" alt="" />
        <Name>초록개구리</Name>
        <span>lgirn@naver.com</span>
      </ContProfile>

    
    <ListProfile>
  <dt>내 활동</dt>
  <dd>생성한 공동구매</dd>
  <dd>참여한 공동구매</dd>
  <dd>관심 공동구매</dd>
</ListProfile>
<ListProfile>
  
  <dt>내 정보</dt>
  <dd>내 프로필</dd>
  <dd>알림설정</dd>
  <dd>환경설정</dd>
</ListProfile>
    </WrapProfile>
<button>로그아웃</button>
    
    
    </Wrap>
  )
}

export const Wrap = styled.div`
  margin: 0 110px;
  ${"img"}{
    width:60px;
    background-color:black;
    
  }
`;


export const Name = styled.span`

font-weight: 700;
font-size: 24px;
line-height: 37px;
`
export const WrapProfile = styled.div`
    /* padding: 0 110px; */
    width: 265px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`;

export const ContProfile = styled.div`
    /* padding: 0 110px; */
    width: 265px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const ListProfile = styled.dd`
  width: 197px;
  margin-bottom: 29px;

${"dt"}{
  border-bottom: 1px solid #2C9B36;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
}

${"dd"}{
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
}
`;

