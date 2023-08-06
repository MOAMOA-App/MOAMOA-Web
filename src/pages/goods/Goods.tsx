import React from "react";
import styled from "styled-components";
import udi from "../../assets/images/udi.png";
import money from "../../assets/images/money.png";
import Card from "../../components/Card";

type GoodsProps = {
  name: string;
  mark: string;
  arr: string;
  optional?: string;
  onClick: (name: string) => void; //함수타입을 가져오고 싶을때
};

function Goods({ name, mark, optional, onClick }: GoodsProps) {
  const arr = [1, 2, 3, 4];
  return (
    <Div>
      <Flex>
        <Img src={udi} alt="" />
        <div>
          <p>해외 충무로역</p>
          <h1>우디 인형 같이 사실 분 구합니다.</h1>
          <img src={money} alt="" />
          <span className="money"> 20,000원</span>

          <Wrap>
            <h3>모집여부</h3>
            <span>모집중</span>
            <h3>모집개수</h3>
            <span>10개 (현재 5개 모집)</span>
            <h3>주최자</h3>
            <span>김씨</span>
            <h3>참여기간</h3>
            <span>23년 9월 30일-23년 10월 12일</span>
            <h3>위치</h3>
            <span>충무로역 2번출구</span>
          </Wrap>
          <Map>지도</Map>
          <BtnWrap>
            <button className="heart">하트</button>
            <button className="chat">채팅</button>
            <button className="party">참여하기</button>
          </BtnWrap>
        </div>
      </Flex>

      <Wrap2>
        <span>상세정보 및 내용</span>
        <p>
          우디 인형 같이 사실분 10명 모이면 시작하고 해외배송이라 1차금 2만원
          받고 2차금 해배비 받아요 날짜 정해서 직거래 예정이고 안되시는 분들은
          준동기비 1800원 추가로 받을게요
        </p>
        <span>공지 및 업데이트</span>
        <div>
          <p>23.10.01 환율 인상으로 18000원 - 20000원 가격 변경했습니다.</p>
          <p>23.10.05 마감일 변경 23.10.07 - 23.10.12</p>
        </div>
      </Wrap2>
      <Span>공동구매 더보기</Span>
      <CardWrap>
        {arr.map((arr) => (
          <Card />
        ))}
      </CardWrap>
    </Div>
  );
}

Goods.defaultProps = {
  mark: "!",
};

export const CardWrap = styled.div`
  display: flex;
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height */

  margin: 27px 0 16px;
  color: #5c5c5c;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  background: red;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 10% 10px;
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
  margin-right: 40px;
`;

export const Wrap = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 90px 349px;
  gap: 6px;
`;

export const Wrap2 = styled.div`
  display: grid;

  grid-template-columns: 150px 800px;
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

export default Goods;
