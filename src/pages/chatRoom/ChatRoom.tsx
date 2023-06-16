import React from 'react'
import styled,{ css } from 'styled-components';

export default function ChatRoom() {
    return (
        <Room>
            <span>메세지 목록</span>
            <input type="text" placeholder="검색하기"/>
            
        </Room>
    )
}



export const Room = styled.div`
    display: flex;
    flex-direction: column;
width: 310px;
height: 598px;


border: 1px solid #D9D9D9;
border-radius: 15px;
`;