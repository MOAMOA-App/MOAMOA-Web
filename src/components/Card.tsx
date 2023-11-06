import React from "react";
import * as S from "../styles/Card.styled";
import { Goods } from "../types/goods.types";
import fullheart from "../assets/images/fullheart.svg";
import heart from "../assets/images/heart.svg";
import { useNavigate, useParams } from "react-router-dom";

interface CardProps {
    good: Goods;
}
export default function Card({ good }: CardProps) {
    return (
        <S.Warp>
            <S.Category>
                <div>
                    <p className="category">{`${good.category}`}</p>
                    <p className="place">
                        {good.sellingArea.split(" ").splice(0, 2).join(" ")}
                    </p>
                </div>
                <p className="count">
                    {`${good.sellCount}/${good.maxCount}`}명 참여
                </p>
            </S.Category>
            <S.Img>
                {good.mainImage && (
                    <img
                        src={`http://3.36.250.168:80${good.mainImage}`}
                        alt=""
                    />
                )}
            </S.Img>
            <S.Title>{good.title}</S.Title>
            <S.Bottom>
                <p>{`D-${good.finishedAt}`}</p>
                <S.Button>
                    <img src={heart} alt="" />
                </S.Button>
            </S.Bottom>
        </S.Warp>
    );
}
