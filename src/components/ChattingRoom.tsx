import React from "react";
import styled, { css } from "styled-components";
import search from "../assets/images/search.svg";
import profile from "../assets/images/profile.png";

export default function ChattingRoom() {
    const arr = [1, 2, 3, 4, 5, 6];
    const handleClick = () => {
        console.log("d");
    };
    return (
        <Room>
            <span>메세지 목록</span>
            <div>
                <img src={search} alt="" />
                <input type="text" placeholder="검색하기" />
            </div>
            {arr.map((x) => (
                <Card onClick={() => handleClick()}>
                    <img src={profile} alt="" />
                    <div>
                        <span>닉네임</span>
                        <p>안녕하세요</p>
                    </div>
                </Card>
            ))}
        </Room>
    );
}

export const Room = styled.div`
    display: grid;
    grid-template-rows: 42px 36px;
    gap: 1px 0;
    background-color: #d9d9d9;
    min-width: 310px;
    height: 598px;
    border: 1px solid #d9d9d9;
    border-radius: 15px;

    @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
        /* flex-direction: column; */
        /* font-size: 12px; */
    }

    ${"span"} {
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: 15px 15px 0 0;
        color: #ff952c;
        font-size: 16px;
        font-family: KoPubWorldDotum_Pro;
        font-weight: 700;
        justify-content: space-around;
    }

    ${"div"} {
        background-color: white;
        display: flex;
        align-items: center;
        padding: 14px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    cursor: pointer;
    ${"div"} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        ${"span"} {
            color: #000;
            font-size: 14px;
            font-family: KoPubWorldDotum_Pro;
            font-weight: 500;
            margin-bottom: 5px;
        }
        ${"p"} {
            color: #8f8f8f;
            font-size: 14px;
            font-family: KoPubWorldDotum_Pro;
            font-weight: 500;
        }
    }
`;
