import React from "react";
import styled from "styled-components";
import Card from "../Card";
import goods from "../../data/goods.json";
import { useGetMyProductList } from "../../queries/getMyProductList";
import { Goods,Goods2 } from "../../types/goods.types";
import { useNavigate, useLocation } from "react-router-dom";
import { useGetPartyProductList } from "../../queries/getPartyProductList";
import { useGetHeartProductList } from "../../queries/getHeartProductList";

interface Props {
    type: string;
}

export default function CreateGoods({ type }: Props) {
    const arr = [1, 2, 3, 4, 5, 6];

    const { data: myData, isLoading: myLoading } = useGetMyProductList();
    const { data: partyData, isLoading: partyLoading } =
        useGetPartyProductList();
    const { data: heartData, isLoading: heartLoading } =
        useGetHeartProductList();
    const navigate = useNavigate();

    return (
        <Wrap>
            <h2>{type}</h2>
            <label htmlFor="search">
                조회
                <Search id="search" type="text" />
            </label>
            <Div>
                {type === "생성한 공동구매" &&
                    !myLoading &&
                    myData &&
                    myData.map((good) => (
                        <div onClick={() => navigate(`/goods/${good.id}`)}>
                            <Card good={good}></Card>
                        </div>
                    ))}
                {type === "참여한 공동구매" &&
                    !partyLoading &&
                    partyData &&
                    partyData.map((good) => (
                        <div
                            onClick={() =>
                                navigate(`/goods/${good.product.id}`)
                            }
                        >
                            <Card good={good.product}></Card>
                        </div>
                    ))}

                {type === "찜한 공동구매" &&
                    !heartLoading &&
                    heartData &&
                    heartData.map((good) => (
                        <div onClick={() => navigate(`/goods/${good.id}`)}>
                            <Card good={good}></Card>
                        </div>
                    ))}
            </Div>
        </Wrap>
    );
}

export const Wrap = styled.div`
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 28px 32px;
    margin-top: 25px;
    ${"h2"} {
        font-size: 18px;
        font-family: KoPubWorldDotum_Pro;
        font-weight: 700;
        margin-bottom: 27px;
    }
`;
export const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    flex-wrap: wrap;
    /* width:100vw; */
    margin: 10 auto 20px;
    gap: 20px;
    padding: 10px;
    @media (max-width: 768px) {
        padding: 26px 10%;
        margin: 0 -40px 40px;
        padding: 10px 40px;
    }
`;
export const Search = styled.input`
    width: 420px;
    height: 33px;
    border: 1px solid #d9d9d9;
    margin-left: 7px;
    border-radius: 25px;
`;
