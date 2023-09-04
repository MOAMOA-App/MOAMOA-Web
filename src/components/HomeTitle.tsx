import React from "react";
import styled from "styled-components";

type TitleProps = {
    title: string[];
};

export default function HomeTitle({ title }: TitleProps) {
    return (
        <Wrap>
            <p className="ment">{title[1]}</p>
            <Cont>
                <p className="tit">{title[0]}</p>
                <p>전체보기 </p>
            </Cont>
        </Wrap>
    );
}

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 7px;
    line-height: 22px;
    width: 100vw;
    margin: 19px 11px;
    border-left: #2c9b36 solid 10px;
    ${".ment"} {
        font-weight: 500;
        font-size: 14px;
        color: #8f8f8f;
    }
    ${".tit"} {
        font-weight: 700;
        font-size: 24px;
        color: #2c9b36;
    }
`;

export const Cont = styled.div`
    display: flex;
    justify-content: space-between;
    color: #2c9b36;
    font-weight: 700;
    font-size: 14px;
`;
