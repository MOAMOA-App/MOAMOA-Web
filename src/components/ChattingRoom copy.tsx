import React from 'react'
import styled,{ css } from 'styled-components';
import search from  "../assets/images/search.svg";
import profile from  "../assets/images/profile.png";

export default function ChattingRoom() {

    const arr=[1,2,3,4,5,6,]

    return (
        <Room>
            <span>메세지 목록</span>
            <div>
                <img src={search} alt="" />
                <input type="text" placeholder="검색하기"/>
            </div>
            {arr.map((x)=>
                <Card>
                <img src={profile} alt="" />
                <div>
                    <span>닉네임</span>
                    <p>안녕하세요</p>
                </div>
                </Card>
            )}
        </Room>
    )
}



export const Room = styled.div`
    display: grid;
    grid-template-rows: 42px 36px; 
    gap: 1px 0;
    background-color: #D9D9D9;
    width: 310px;
    height: 598px;
    border: 1px solid #D9D9D9;
    border-radius: 15px;

${"span"}{
    background-color: white;
    display: flex;
    align-items: center;
    border-radius: 15px 15px 0 0 ;
    color: #FF952C;
font-size: 16px;
font-family: KoPubWorldDotum_Pro;
font-weight: 700;
justify-content: space-around;

}

${"div"}{
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

    ${"div"}{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        ${"span"}{
            color: #000;
            font-size: 14px;
            font-family: KoPubWorldDotum_Pro;
            font-weight: 500;
            margin-bottom: 5px;
        }
        ${"p"}{
            color: #8F8F8F;
            font-size: 14px;
            font-family: KoPubWorldDotum_Pro;
            font-weight: 500;
        }
    }
`