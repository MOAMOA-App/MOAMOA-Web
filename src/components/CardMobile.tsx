import React from "react";
import * as S from "../styles/CardMobile.styled";
import { Goods } from "../types/goods.types";
import fullheart from "../assets/images/fullheart.svg";
import heart from "../assets/images/heart.svg";

interface CardProps {
    good: Goods;
}
export default function CardMobile({ good }: CardProps) {
    return (
        <S.Wrap>
            <S.Img></S.Img>
            <S.Cont>
                <S.TitleCont>
                    <h2>{good.title}</h2>
                    <span className="setting">참여자 관리</span>
                </S.TitleCont>
                <p className="place">{good.sellingArea}</p>
                {/* <p className="day">D-{good.finishedAt}</p> */}
                <S.CountCont>
                    <p>
                        <span className="count">[{good.status}] </span>
                        {good.sellPrice}원
                    </p>
                    <p className="count">
                        {good.sellCount}/{good.maxCount}
                    </p>
                </S.CountCont>
            </S.Cont>
        </S.Wrap>
    );
}
