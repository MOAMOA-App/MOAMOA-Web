import React from "react";
import styled, { css } from "styled-components";

interface ImageProps {
    name: string;
    src: string;
}
export default function Category() {
    const imgArr: ImageProps[] = [
        { name: "전체", src: "/all.png" },
        { name: "관심", src: "/favorites.png" },
        { name: "생활", src: "/lifestyle.png" },
        { name: "의류", src: "/clothing.png" },
        { name: "식품", src: "/food.png" },
        { name: "가전", src: "/electronics.png" },
        { name: "취미", src: "/hobbies.png" },
        { name: "운동", src: "/sports.png" },
        { name: "굿즈", src: "/goods.png" },
        { name: "동물", src: "/animals.png" },
        { name: "해외", src: "/overseas.png" },
        { name: "기타", src: "/others.png" },
    ];
    return (
        <Wrap>
            {imgArr.map(({ name, src }) => (
                <Div>
                    <img src={src} alt="" />
                    {name}
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
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    }
`;
