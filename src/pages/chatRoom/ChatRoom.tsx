import React from 'react'
import styled,{ css } from 'styled-components';
import search from  "../../assets/images/search.svg";
import ChattingRoom from "../../components/ChattingRoom.tsx";
import ChatPage from "../../components/ChatPage.tsx";

export default function ChatRoom() {

    const arr=[1,2,3,4,5]

    return (
        <Wrap>
            <ChattingRoom></ChattingRoom>
            <ChatPage></ChatPage>

        </Wrap>
    )
}

export const Wrap = styled.div`
    margin: 0 100px;
    display: flex;
    padding-top:170px;
    
`;