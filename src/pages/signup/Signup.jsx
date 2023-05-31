import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <Wrap>
            <h1>회원가입</h1>
        <Div>    
                        
        <Form >
            <WrapInp>
                <label htmlFor='emailInput'>이메일</label>
                <input 
                type="email" 
                id="emailInput"
                name="email"
                placeholder="이메일 주소를 적어주세요.">
                </input>
                {/* <p >ㅇ</p> */}
            </WrapInp>
            <WrapInp>
                <label htmlFor='nameInput'> 이름 </label>
                <input 
                type="name" 
                id="nameInput"
                name="name"
                placeholder="이메일 주소를 적어주세요.">
                </input>
                {/* <p >ㅇ</p> */}
            </WrapInp>
            <WrapInp>

                <label htmlFor="passwordInput" >비밀번호</label>
                <input 
                type="password" 
                id="passwordInput"
                name="password"
                placeholder="비밀번호를 입력하세요.">
                </input>
            </WrapInp>

            <WrapInp>

                <label htmlFor="pswInput" >비밀번호 확인</label>
                <input 
                type="password" 
                id="pswInput"
                name="psw"
                placeholder="비밀번호를 입력하세요.">
                </input>
            </WrapInp>

        </Form>
        </Div>
        <WrapMent>
            <Label for="scales"> <input type="checkbox" id="scales" name="scales" checked/>로그인 상태 유지</Label>
            <p>자세히 보기</p>
        </WrapMent>

        <Btn>회원가입</Btn>
        </Wrap>
    )
}



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
    margin: 60px 0 ;
    ${"h1"}{
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: #F79331;
        margin-bottom: -8px;
    }
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: flex-start;
    margin-top: 35px;
`;


export const Form = styled.div`
    display: flex;
    flex-direction: column;

`;

export const WrapInp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 23px;

    ${"label"}{
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #5C5C5C;
    }
    ${"input"}{
        border-bottom: 1px solid #F79331;
        width: 356px;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
    }
`;

export const WrapMent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 356px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #8F8F8F;
    align-items: flex-end;
    margin-bottom: 32px;
    ${"p"}{
        border-bottom: 1px solid #8F8F8F;
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
    margin: 10px 0;
    color: white;
`;



