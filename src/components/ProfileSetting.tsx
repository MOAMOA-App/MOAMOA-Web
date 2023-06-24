import React from 'react'
import styled from 'styled-components';

export default function ProfileSetting() {
  return (
    <Wrap>
        <Cont>
            <h2>내 프로필</h2>
            <div>
                <span>닉네임</span>
                <span>초로개구리</span>
            </div>
            <div>
                <span>이메일</span>
                <span>lgrin02@naver.com</span>
            </div>
            <div>
                <span>지역</span>
                <span>서울특별시 종로구</span>
                <button>변경</button>
            </div>
        </Cont>
        <Cont>
            <h2>계정 정보 변경</h2>
            <div>

            </div>
            <div>

            </div>
            <div>
                <span>새 비밀번호 확인</span>
                
                <button>수정</button>
            </div>
        </Cont>

    </Wrap>
  )
}


export const Wrap = styled.div`
width: 970px;
height: 680px;
border-radius: 5px;
background: #FFF;
box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
padding: 28px 31px;
margin-top:25px;

`;

export const Cont = styled.div`

${"h2"}{
    font-size: 18px;
font-family: KoPubWorldDotum_Pro;
font-weight: 700;
}
margin-bottom: 67px;
`;


export const Label = styled.label`
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #8F8F8F;
`;
export const Inp= styled.input`
    border: 1px solid #F79331;
    border-radius: 1550px;
    margin: 0 0 10px;
    padding: 0 18px;
    width: 356px;
    height: 40px;
`;

