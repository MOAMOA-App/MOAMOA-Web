import React, { useState } from "react";
import ProfileMenu from "../components/profile/ProfileMenu";
import ProfileDetail from "../components/profile/ProfileDetail";
import ProfileSetting from "../components/profile/ProfileSetting";
import CreateGoods from "../components/profile/CreateGoods";
import styled from "styled-components";

export default function Profile() {
    const [type, setType] = useState("setting");

    return (
        <Wrap>
            <ProfileMenu></ProfileMenu>

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
                            <CreateGoods
                            ></CreateGoods>
                        </>
                    ),
                }[type]
            }
        </Wrap>
    );
}

export const Wrap = styled.div`
    display: flex;
`;
