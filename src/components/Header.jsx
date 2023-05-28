import React from 'react'
import { Link } from 'react-router-dom';
import  logo  from '../assets/images/logo.png';
import  title  from '../assets/images/title.png';
import  chat  from '../assets/images/chat.svg';
import  alarm  from '../assets/images/alarm.svg';
import styled from 'styled-components';

export default function Header() {
    return (
        <Div>
            <div>
                <img src={logo} alt="" />
                <img src={title} alt="" />
            </div>
            <Wrap>
                <Write to="/write">공동구매 모집</Write>
                <Link to="/chat">채팅</Link>
                <Link to="/alarm">알림</Link>
                <Link to="/profile">프로필</Link>
            </Wrap>
        </Div>
    )
}

export const Div = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;

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
`;

export const Chat = styled(Link)`
`;

export const Alarm = styled(Link)`
`;

export const Profile = styled(Link)`
`;
