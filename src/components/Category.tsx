import React from "react";
import styled, { css } from "styled-components";

export default function Category() {
    const arr = [
        "/전체.png",
        "/관심.png",
        "/생활.png",
        "/의류.png",
        "/식품.png",
        "/가전.png",
        "/취미.png",
        "/운동.png",
        "/굿즈.png",
        "/동물.png",
        "/해외.png",
        "/기타.png",
    ];
    return (
        <Wrap>
            {arr.map((arr) => (
                <Div>
                    <img src={arr} alt="" />
                    {arr.slice(1, 3)}
                </Div>
            ))}
        </Wrap>
    );
}

export const Div = styled.div`
    display: flex;
    width: 80px;
    height: 85px;
    flex-direction: column;
    align-items: center;
    /* margin-top: 15px;  */
    cursor: pointer;
    margin: 7px 20px;
    ${"img"} {
        margin-bottom: 3px;
        width: 60px;
        height: 60px;

        @media (max-width: 768px) {
            width: 35px;
            height: 35px;
        }
    }
    @media (max-width: 768px) {
        margin: 0px 13px;
        padding-bottom: 20px;
    }
`;

export const Wrap = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    width: 100vw;
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    }
`;
