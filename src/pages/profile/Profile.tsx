import React, { useState } from "react";
import ProfileMenu from "../../components/profile/ProfileMenu";
import ProfileMobile from "../../components/profile/ProfileMobile";
import ProfileDetail from "../../components/profile/ProfileDetail";
import ProfileSetting from "../../components/profile/ProfileSetting";
import CreateGoods from "../../components/profile/CreateGoods";
import styled from "styled-components";
import { getUserInfo } from "../../utils/localStorage";
import * as S from "../../styles/Profile.styled";

export default function Profile() {
    const [type, setType] = useState<string>("setting");
    const userInfo = getUserInfo();
    return (
        <>
            <Wrap>
                {userInfo && (
                    <ProfileMenu
                        info={userInfo}
                        type={type}
                        setType={setType}
                    ></ProfileMenu>
                )}
                {
                    // {
                    //     setting: <ProfileSetting></ProfileSetting>,
                    //     detail: (
                    //         <>
                    //             <ProfileDetail type = {type}></ProfileDetail>
                    //         </>
                    //     ),
                    //     create: (
                    //         <>
                    //             <CreateGoods type = {type}></CreateGoods>
                    //         </>
                    //     ),
                    //     party: (
                    //         <>
                    //             <CreateGoods type = {type}></CreateGoods>
                    //         </>
                    //     )
                    // }[type]

                    userInfo && type === "setting" ? (
                        <ProfileSetting info={userInfo} />
                    ) : type === "detail" ? (
                        <ProfileDetail></ProfileDetail>
                    ) : (
                        <CreateGoods type={type}></CreateGoods>
                    )
                }
            </Wrap>
            <ProfileMobile info={userInfo}></ProfileMobile>
        </>
    );
}

export const Wrap = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
