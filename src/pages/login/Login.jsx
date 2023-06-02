import React from 'react'
import  logo  from '../../assets/images/logo.png';
import  title  from '../../assets/images/title.png';
import  kakao  from '../../assets/images/kakao.svg';
import  google  from '../../assets/images/google.svg';
import  naver  from '../../assets/images/naver.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <Wrap>
            <Logo src={logo} alt="" />
            <Tit src={title} alt="" />
        <Div>                
            <Inp type="text" placeholder="이메일"/>
            <Inp type="text" placeholder="비밀번호 "/>

            <Label for="scales"> <input type="checkbox" id="scales" name="scales" checked/>로그인 상태 유지</Label>

        </Div>
        <Btn>로그인</Btn>
        <div>
            <SearchId to="/signup">아이디/비밀번호 찾기</SearchId>
            <span> | </span>
            <SignUp to="/profile">회원가입</SignUp>
        </div>
        <LoginSns>SNS 계정으로 로그인</LoginSns>
        <Cont>
            <img src={kakao} alt="" />
            <img src={google} alt="" />
            <img src={naver} alt="" />
        </Cont>
        
        </Wrap>
    )
}

export const Logo = styled.img`

    margin: 93px 0 13px; 
    width: 56px;
    height: 57px;
`;

export const Tit = styled.img`
    width: 164px;
    height: 43px;
    /* margin-bottom: 35px; */
`;

export const Label = styled.label`
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #8F8F8F;
`;
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: flex-start;
    margin-top: 35px;
`;

export const Cont = styled.div`
    display: flex;
    width: 227px;
    justify-content: space-between;
    ${"img"}{
        cursor: pointer;
    }
`;

export const Inp= styled.input`
    border: 1px solid #F79331;
    border-radius: 1550px;
    margin: 0 0 10px;
    padding: 0 18px;
    width: 356px;
    height: 40px;
`;

export const Btn= styled.button`
    width: 356px;
    height: 40px;
    background: #2C9B36;
    border-radius: 50px;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 10px 0;
    color: white;
`;


export const SearchId = styled(Link)`
color: #8F8F8F;
font-weight: 500;
font-size: 14px;
`;

export const SignUp = styled(Link)`
color: #5C5C5C;
font-weight: 700;
font-size: 14px;
`;

export const LoginSns = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #5C5C5C;
    margin: 30px 0 12px;
`;
