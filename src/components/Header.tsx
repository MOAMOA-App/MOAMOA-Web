import React from 'react'
import { Link } from 'react-router-dom';
import  logo  from '../assets/images/logo.png';
import  title  from '../assets/images/title.png';
// import  chat  from '../assets/images/chat.svg';
// import  alarm  from '../assets/images/alarm.svg';
import  mozip  from '../assets/images/mozip.svg';
import styled,{ css } from 'styled-components';

export default function Header() {
    return (
        <Div>
            <div>
                <img src={logo} alt="" />
                <img src={title} alt="" />
            </div>
            <Wrap>
                <Write to="/write">
                <img src={mozip} alt="" />
                    공동구매 모집</Write>
                <Icon to="/chat"/>
                <Icon to="/alarm"/>
                <Profile to="/profile"/>
            </Wrap>
        </Div>
    )
}

  const setAttr = (attr) => {
        switch (attr) {
        case '/chat':
            return css`
                background: url('/chat.png') no-repeat ; 
                background-size: 100%;
            `
        case '/alarm':
            return css`
                background: url('/alert.png') no-repeat ; 
                background-size: 100%;
            `
        case '/profile':
            return css`
                background: url('/profile.svg') no-repeat ; 
            `
        }
    };

export const Div = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding:0 110px 10px;
    margin-top: 93px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    
    
`;

export const Wrap = styled.div`
    display: flex;
`;

export const Write = styled(Link)`
    width: 132px;
    height: 40px;
    display: flex;
    background: #F79331;
    border-radius: 3px;
    align-items: center;
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 700;
    padding: 14px;
    align-items: flex-start;
    ${"img"}{
        margin-right: 4px;
    }
`;

export const Icon = styled(Link)`
    /* background: url('/chat.svg') no-repeat ; */
    width: 40px;
    height: 40px;
    /* margin: 3px 0 0 20px ; */
    ${({ to }) => setAttr(to)}
  

`;

export const Profile = styled(Link)`
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 50%;
    background-color: black;
`;
