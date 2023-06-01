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
                background: url('/chat.svg') no-repeat ; 
                margin: 6px 20px 0 25px;
            `
        case '/alarm':
            return css`
                background: url('/alarm.svg') no-repeat ; 
                margin-top: 4px ;
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
    width: 35px;
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
