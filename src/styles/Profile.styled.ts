import { styled } from "styled-components";

export const Wrap = styled.div`
    position: relative;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const Profile = styled.button`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: black;
    margin-right: 38px;
`;
export const SettingBtn = styled.button`
    position: absolute;
    top: 0;
    right: 8%;
    color: #f79331;
    font-size: 12px;
    font-weight: 500;
`;

export const MenuCont = styled.div`
    margin: 0 8%;
`;
export const ProfileCont = styled.div`
    display: flex;
    line-height: 20px;
    ${"h1"} {
        font-weight: 800;
        font-size: 18px;
    }
    ${"p"} {
        color: #8f8f8f;
    }
`;
