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
  <dd><button>생성한 공동구매</button></dd>
  <dd><button>참여한 공동구매</button></dd>
  <dd><button>관심 공동구매</button></dd>
</ListProfile>
<ListProfile>
  
  <dt>내 정보</dt>
  <dd><button>내 프로필</button></dd>
  <dd><button>알림설정</button></dd>
  <dd><button>환경설정</button></dd>
<button>로그아웃</button>
</ListProfile>
    </WrapProfile>
    
    
    </Wrap>
  )
}

export const Wrap = styled.div`
  margin: 0 110px;
  ${"img"}{
    width:160px;
    height: 160px;
    background-color:black;
border-radius: 50%;
  }
`;


export const Name = styled.span`

font-weight: 700;
font-size: 24px;
line-height: 37px;
margin-top: 11px;

`
export const WrapProfile = styled.div`
    /* padding: 0 110px; */
    width: 265px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContProfile = styled.div`
    /* padding: 0 110px; */
    width: 265px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0 64px;

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
  font-size: 14px;
  line-height: 22px;
  margin:6px 0;
  &:hover{
    font-size: 33px;

  }
}
`;

