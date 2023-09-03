import React, { useState } from "react";
import ProfileMenu from "../components/profile/ProfileMenu";
import ProfileDetail from "../components/profile/ProfileDetail";
import ProfileSetting from "../components/profile/ProfileSetting";
import CreateGoods from "../components/profile/CreateGoods";
import styled from "styled-components";
import * as S from "../style/profile.styed";

export default function Profile() {
    const [type, setType] = useState<string>("setting");

    return (
        <>
            <Wrap>
                <ProfileMenu type={type} setType={setType}></ProfileMenu>

                {
                    {
                        setting: <ProfileSetting></ProfileSetting>,
                        detail: (
                            <>
                                <ProfileDetail></ProfileDetail>
                            </>
                        ),
                        create: (
                            <>
                                <CreateGoods></CreateGoods>
                            </>
                        ),
                    }[type]
                }
            </Wrap>

            <S.Wrap>
                <S.Profile />
                <div>
                    <h1>알라뷰</h1>
                    <p>example@gmail.com</p>
                    <p>서울 마포구 연남동</p>
                </div>
                <S.SettingBtn>프로필수정</S.SettingBtn>
            </S.Wrap>
        </>
    );
}

export const Wrap = styled.div`
    display: flex;
    @media screen and (max-width: 500px) {
        display: none;
    }
`;
