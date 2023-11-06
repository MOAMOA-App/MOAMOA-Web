import React, { useEffect } from "react";
import Card from "../../components/Card";
import goods from "../../data/goods.json";
import search from "../assets/images/search_orange.svg";
import Category from "../../components/Category";
import HomeTitle from "../../components/HomeTitle";
import * as S from "../../styles/Home.styled";
import { useNavigate, useLocation } from "react-router-dom";
import { useGetProductList } from "../../queries/getProductList";
import { Goods } from "@/types/goods.types";

export default function Home() {
    // console.log(goods.goods);
    const titleArr = [
        ["마감임박", "마감이 가까워요"],
        ["인기순", "사용자들이 선호하는 상품"],
        ["최신순", "What’s new?"],
    ];
    const navigate = useNavigate();
    const { data, isLoading } = useGetProductList();
    useEffect(() => {
        !isLoading && console.log(data);
    }, []);

    return (
        <S.Wrap>
            {/* <S.HomeSearchBar>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="검색어를 입력해주세요."
                />
                <img src={search} alt="" />
            </S.HomeSearchBar> */}
            <Category />

            {!isLoading &&
                titleArr.map((title) => (
                    <S.RowCont>
                        <HomeTitle title={title} />
                        <S.ContCard>
                            {data.slice(0,5).map((good: Goods) => (
                                <div
                                    onClick={() =>
                                        navigate(`/goods/${good.id}`)
                                    }
                                >
                                    <Card good={good}></Card>
                                </div>
                            ))}
                        </S.ContCard>
                    </S.RowCont>
                ))}
        </S.Wrap>
    );
}
