import React from "react";
import styled from "styled-components";
import udi from "../../assets/images/udi.png";
import money from "../../assets/images/money.png";
import heart from "../../assets/images/heart-orange.svg";
import chat from "../../assets/images/chat-orange.svg";
import Card from "../components/Card";
import goods from "../data/goods.json";
import MapContainer from "../hooks/KakaoMapScript";

function Goods() {
    const arr = [1, 2, 3, 4];
    console.log(goods.goods[0]);
    const good = goods.goods[0];

    return (
        <Div>
            <Flex>
                <Img src={udi} alt="" />
                <ContentCont>
                    <TitleCont>
                        <span>{good.category}</span>
                        <p>{good.sellingArea}</p>
                    </TitleCont>
                    <h1>{good.title}</h1>
                    <img src={money} alt="" />
                    <span className="money"> {good.sellPrice}원</span>

                    <Wrap>
                        <h3>모집여부</h3>
                        <span>모집중</span>
                        <h3>모집개수</h3>
                        <span>
                            {good.maxCount}개 (현재 {good.sellCount}개 모집)
                        </span>
                        <h3>주최자</h3>
                        <span>{good.user.nick}</span>
                        <h3>참여기간</h3>
                        <span>23년 9월 30일-23년 10월 12일</span>
                        <h3>위치</h3>
                        <span>{good.sellingArea}</span>
                    </Wrap>
                    {/* <Map>
                        <MapContainer inputAddressValue={""} />
                    </Map> */}
                    <BtnWrap>
                        <button className="heart">
                            <img src={heart} alt="" />
                        </button>
                        <button className="chat">
                            <img src={chat} alt="" />
                        </button>
                        <button className="party">참여하기</button>
                    </BtnWrap>
                </ContentCont>
            </Flex>
            <Wrap2>
                <span>상세정보 및 내용</span>
                <p>{good.description}</p>
                <span>공지 및 업데이트</span>
                <div>
                    {good.announces.map((announce) => (
                        <>
                            <p>23.10.01 {announce.contents}</p>
                        </>
                    ))}
                </div>
            </Wrap2>
            <Span>공동구매 더보기</Span>
            <CardWrap>
                {goods.goods.slice(0, 4).map((good) => (
                    <Card good={good} />
                ))}
            </CardWrap>
        </Div>
    );
}

Goods.defaultProps = {
    mark: "!",
};

export const CardWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 19px;

    @media (max-width: 768px) {
        width: 100vw;
        height: 300px;
        overflow-x: scroll;
    }
`;

export const Span = styled.span`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin: 27px 0 16px;
    color: #5c5c5c;
`;

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1112px) {
        flex-direction: column;
    }
    ${"h1"} {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        /* identical to box height */

        color: #000000;
    }
    ${".money"} {
        font-weight: 700;
        font-size: 24px;
        line-height: 37px;
        padding-bottom: 5px;
        /* identical to box height */

        color: #2c9b36;
    }

    ${"h3"} {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height */

        color: #5c5c5c;
    }

    ${"span"} {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height */

        color: #5c5c5c;
    }
`;

export const Map = styled.div`
    width: 439px;
    height: 230px;
    margin-top: 10px;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        margin: 0 8%;
    }
    ${"input"} {
        width: 216px;
        border-bottom: 1px solid #d9d9d9;
        margin-right: 5px;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
    }

    ${"label"} {
        font-weight: 700;
        font-size: 16px;
    }
`;

export const ContentCont = styled.div`
    margin-left: 40px;
    @media (max-width: 1112px) {
        margin-top: 20px;
        margin-left: 0px;

        /* flex-direction: column; */
        /* font-size: 12px; */
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    /* width: 349px; */
    height: 40px;
    margin: 14px 0 27px;
    ${".heart"} {
        border: 1px solid #d9d9d9;
        border-radius: 3px;
        width: 46px;
    }
    ${".chat"} {
        border: 1px solid #d9d9d9;
        border-radius: 3px;
        margin: 0 9px;
        width: 46px;
    }

    ${".party"} {
        background: #2c9b36;
        border-radius: 3px;
        width: 328px;
        font-weight: 700;
        font-size: 20px;
        line-height: 31px;
        /* identical to box height */

        text-align: center;

        color: #ffffff;
    }
`;
export const Img = styled.img`
    width: 438px;
    height: 438px;
`;

export const Wrap = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 90px 349px;
    gap: 6px;
`;

export const Wrap2 = styled.div`
    display: grid;

    grid-template-columns: 150px minmax(auto, 950px);
    gap: 15px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    padding: 16px 0;
    ${"span"} {
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        /* identical to box height */

        color: #f79331;
    }
    ${"p"} {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;

        color: #5c5c5c;
    }
`;

export const TextArea = styled.textarea`
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    margin: 10px 0 20px;
`;

export const Btn = styled.button`
    width: 55px;
    height: 29px;
    background: #d9d9d9;
    border-radius: 15px;
    font-weight: 500;
    font-size: 14px;
    margin: 0 7px;
`;

export const Inp = styled.input`
    width: 216px;
    height: 35px;
    border: 1px solid #d9d9d9;
    border-radius: 1550px;
`;

export const TitleCont = styled.div`
    display: flex;
    align-items: center;
    ${"span"} {
        border-radius: 15px;
        background: #2c9b36;
        color: #fff;
        text-align: center;
        font-size: 14px;
        padding: 0 9px;
        margin-right: 9px;
    }
`;

export default Goods;
