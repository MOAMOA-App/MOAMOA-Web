import React from 'react'
import { Link } from 'react-router-dom';
import  logo  from '../assets/images/logo.png';
import  title  from '../assets/images/title.png';
import  chat  from '../assets/images/chat.svg';
// import  alarm  from '../assets/images/alarm.svg';
import  mozip  from '../assets/images/mozip.svg';
import styled from 'styled-components';

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
                <Chat to="/chat"/>
                <Alarm to="/alarm">알림</Alarm>
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
    padding:0 110px 16px;
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

export const Chat = styled(Link)`
    width: 40px;
    height: 30px;
    margin: 5px 5px;
    /* /* background-image: url('/css_sprites.png');  */
/* background-image: url('/alarm.svg'); */
background: url('/alarm.svg') no-repeat ;


`;

export const Alarm = styled(Link)`
`;

export const Profile = styled(Link)`
`;
