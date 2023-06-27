import React from 'react'
import  ProfileMenu  from '../../components/ProfileMenu.tsx';
import  ProfileDetail  from '../../components/ProfileDetail.tsx';
import  ProfileSetting  from '../../components/ProfileSetting.tsx';
import  CreateGoods  from '../../components/CreateGoods.tsx';
import styled from 'styled-components';

export default function Profile() {


    return (
        <Wrap>
            <ProfileMenu></ProfileMenu>
            {/* <ProfileSetting></ProfileSetting> */}
            <ProfileDetail></ProfileDetail>
            {/* <CreateGoods></CreateGoods> */}

        </Wrap>
    )
}



export const Wrap = styled.div`
    display: flex;
`;

