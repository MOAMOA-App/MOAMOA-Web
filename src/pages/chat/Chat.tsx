import React from "react";
import styled, { css } from "styled-components";
import search from "../../assets/images/search.svg";
import ChattingRoom from "../../components/ChattingRoom";
import ChatPage from "../../components/ChatPage";

export default function ChatRoom() {
    const arr = [1, 2, 3, 4, 5];

    return (
        <Wrap>
            <ChattingRoom></ChattingRoom>
            <Chat>
                <ChatPage />
            </Chat>
        </Wrap>
    );
}

export const Wrap = styled.div`
    display: flex;
`;

export const Chat = styled.div`
    @media (max-width: 768px) {
        display: none;

        /* flex-direction: column; */
        /* font-size: 12px; */
    }
`;
