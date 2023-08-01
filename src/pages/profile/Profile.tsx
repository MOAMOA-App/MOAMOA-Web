import React, {useState} from 'react'
import  ProfileMenu  from '../../components/ProfileMenu.tsx';
import  ProfileDetail  from '../../components/ProfileDetail.tsx';
import  ProfileSetting  from '../../components/ProfileSetting.tsx';
import  CreateGoods  from '../../components/CreateGoods.tsx';
import styled from 'styled-components';

export default function Profile() {
    const [type, setType] = useState("setting");

    

    return (
        <Wrap>
            <ProfileMenu type={type} setType={setType}></ProfileMenu>

        {   {
            setting : (
                <ProfileSetting></ProfileSetting>
            ),
            detail : (
                <>
                <ProfileDetail></ProfileDetail> 

                </>
            ),
            create : (
                <>
                    <CreateGoods type={type} setType={setType}></CreateGoods>                 
                </>
            ),
            }[type]
        }





        </Wrap>
    )
}



export const Wrap = styled.div`
    display: flex;
    padding-top:170px;
`;

