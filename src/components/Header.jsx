import React from 'react'
import { Link } from 'react-router-dom';
import  logo  from '../assets/images/logo.png';
import  title  from '../assets/images/title.png';
import styled from 'styled-components';

export default function Header() {
    return (
        <Div>
            <div>
                <img src={logo} alt="" />
                <img src={title} alt="" />
            </div>
            <div>
                <Write to="/write">공동구매 모집</Write>
                <Link to="/chat">채팅</Link>
                <Link to="/alarm">알림</Link>
                <Link to="/profile">프로필</Link>
            </div>
        </Div>
    )
}



export const Div = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;

`;

export const Write = styled(Link)`
	box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
	text-align: center;
`;