import React, { useState } from "react";
import styled from "styled-components";
interface Props {
    checked: string;
}
export default function ProfileDetail() {
    const order = ["게시글 수정", "참여자 관리"];
    const [selectedOrder, setSelectedOrder] = useState("게시글 수정");
    const handleCategoryClick = (item: string) => {
        setSelectedOrder(item);
    };
    return (
        <div>
            <div>
                {order.map((item) => (
                    <ToggleBtn
                        checked={selectedOrder}
                        onClick={() => {
                            handleCategoryClick(item);
                        }}
                    >
                        {item}
                    </ToggleBtn>
                ))}
            </div>
            <Wrap>
                <div>
                    <div>
                        <TitleCont>
                            <h4>이천쌀 구매해요</h4>
                            <button>삭제</button>
                        </TitleCont>
                        <StateCont>
                            <div>
                                <State>거래 상태</State>
                                <State>모집중</State>
                                <Btn>수정</Btn>
                                <State>모집현황</State>
                                <State>3/10</State>
                                <Btn>수정</Btn>
                            </div>
                            <InfoBtn>참여자 정보 엑셀화</InfoBtn>
                        </StateCont>
                    </div>
                </div>
                <div>
                    <Table>
                        <THead>
                            <tr>
                                <th>참여자</th>
                                <th>입금확인</th>
                                <th>구매개수</th>
                                <th>채팅</th>
                                <th>거래취소</th>
                            </tr>
                        </THead>
                        <TBody>
                            <tr>
                                <td>홍길동</td>
                                <td>완료</td>
                                <td>3개</td>
                                <td>홍길동과 대화</td>
                                <td>거래취소</td>
                            </tr>
                            <tr>
                                <td>김영희</td>
                                <td>완료</td>
                                <td>1개</td>
                                <td>김영희와 대화</td>
                                <td>거래취소</td>
                            </tr>
                            <tr>
                                <td>이영희</td>
                                <td>완료</td>
                                <td>2개</td>
                                <td>이영희와 대화</td>
                                <td>거래취소</td>
                            </tr>
                        </TBody>
                    </Table>
                </div>
            </Wrap>
        </div>
    );
}

export const ToggleBtn = styled.button<Props>`
    width: 118px;
    height: 34px;
    border-radius: 10px 10px 0px 0px;
    background: #d9d9d9;

    color: white;
    margin-top: 11px;

    background: ${(props) => (props.checked === props.children ? "#2c9b36" : "#d9d9d9")};
`;

export const InfoBtn = styled.button`
    width: 157px;
    height: 40px;
    border-radius: 3px;
    font-size: 14px;
    font-family: KoPubWorldDotum_Pro;
    font-weight: 700;
    color: white;
`;

export const Wrap = styled.div`
    width: 970px;
    height: 665px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    padding: 27px 21px 27px 20px;
`;

export const TitleCont = styled.div`
    ${"h4"} {
        font-size: 18px;
        font-family: KoPubWorldDotum_Pro;
        font-weight: 700;

        margin-bottom: 9px;
    }
    width: 915px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    /* margin: 21px 31px  */
`;

export const StateCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0 12px;
`;

export const State = styled.span`
    font-size: 14px;
    font-family: KoPubWorldDotum_Pro;

    margin-right: 8px;
`;

export const Btn = styled.button`
    width: 46px;
    height: 22px;
    border-radius: 15px;
    background: #f79331;
    color: white;
    margin-right: 22px;
    text-align: center;
    font-size: 14px;
    font-family: KoPubWorldDotum_Pro;
    font-weight: 700;
`;

export const THead = styled.thead`
    /* width: 900px; */
    height: 41px;
    background: #2c9b36;
    ${"th"} {
        padding: 10px;
        text-align: center;
    }
    color: white;
    /* } */
`;

export const Table = styled.table`
    width: 900px;
`;

export const TBody = styled.tbody`
    width: 900px;
    ${"td"} {
        height: 64px;
        color: #5c5c5c;
        text-align: center;
        font-size: 14px;
        font-family: KoPubWorldDotum_Pro;
        font-weight: 500;
        border-bottom: 1px solid #d9d9d9;

        padding: 21px 0;
    }
`;
