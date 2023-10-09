import React, { useState } from "react";
import ProfileMenu from "../../components/profile/ProfileMenu";
import ProfileMobile from "../../components/profile/ProfileMobile";
import ProfileDetail from "../../components/profile/ProfileDetail";
import ProfileSetting from "../../components/profile/ProfileSetting";
import CreateGoods from "../../components/profile/CreateGoods";
import styled from "styled-components";
import * as S from "../../styles/Profile.styled";

export default function Profile() {
    const [type, setType] = useState<string>("setting");

    return (
        <>
            <Wrap>
                <ProfileMenu type={type} setType={setType}></ProfileMenu>

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

                    type === "setting" ? (
                        <ProfileSetting />
                    ) : type === "detail" ? (
                        <ProfileDetail></ProfileDetail>
                    ) : (
                        <CreateGoods type={type}></CreateGoods>
                    )
                }
            </Wrap>
            <ProfileMobile></ProfileMobile>
        </>
    );
}

export const Wrap = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
