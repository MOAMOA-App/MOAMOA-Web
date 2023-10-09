import React, { useState } from "react";
import chat from "../../assets/images/chat_mobile.svg";
import area from "../../assets/images/area_mobile.svg";
import alarm from "../../assets/images/alarm_mobile.svg";
import user from "../../assets/images/user_mobile.svg";
import setting from "../../assets/images/setting_mobile.svg";
import CardMobile from "../CardMobile";
import goods from "../../data/goods.json";

import styled from "styled-components";
import * as S from "../../styles/Profile.styled"
interface ImageProps {
    name: string;
    src: string;
}
type ListBtnProps = {
    type: string; // type prop을 선택적으로 받습니다.
};

export default function ProfileMobile() {
    const imgArr: ImageProps[] = [
        { name: "대화 목록", src: chat },
        { name: "지역 설정", src: area },
        { name: "알림 설정", src: alarm },
        { name: "계정 정보", src: user },
        { name: "환경 설정", src: setting },
    ];
    const btnList = ["생성한 공동구매", "참여한 공동구매", "관심 공동구매"];
    const [type, setType] = useState<string>("default");
    return (
        <S.Wrap>
            <S.MenuCont>
                {type === "default" ? (
                    <>
                        <S.ProfileCont>
                            <S.Profile />
                            <div>
                                <h1>알라뷰</h1>
                                <p>example@gmail.com</p>
                                <p>서울 마포구 연남동</p>
                            </div>
                            <S.SettingBtn>프로필수정</S.SettingBtn>
                        </S.ProfileCont>
                    </>
                ) : (
                    <>
                        <span style={{"color": "#8f8f8f"}}>내 활동</span>
                    </>
                )}
            </S.MenuCont>
            <BtnCont>
                {btnList.map((item) => (
                    <Btn
                        type={type}
                        onClick={() => {
                            setType(type === item ? "default" : item);
                        }}
                    >
                        {item}
                    </Btn>
                ))}
            </BtnCont>
            {type !== "default" && (
                <div>
                    {goods.goods.map((good) => (
                        <CardMobile good={good}></CardMobile>
                    ))}
                </div>
            )}

            {type === "default" && (
                <ListCont>
                    {imgArr.map(({ name, src }) => (
                        <Item>
                            <img src={src} alt="" />
                            <span>{name}</span>
                        </Item>
                    ))}
                </ListCont>
            )}
        </S.Wrap>
    );
}

export const Btn = styled.button<ListBtnProps>`
    width: 100px;
    height: 58px;

    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.45);
    background-color: ${(props) =>
        props.type === props.children ? "#F79331" : "white"};
    color: ${(props) => (props.type === props.children ? "white" : "black")};
`;

export const BtnCont = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr); // 3개의 열 생성
    gap: 20px; // 그리드 아이템 간의 간격
    margin: 15px 8% 37px;
`;

export const ListCont = styled.ul`
    margin: 37px 8%;
`;

export const Item = styled.li`
    cursor: pointer;
    ${"span"} {
        margin-left: 12px;
    }
    margin-bottom: 22px;
`;
