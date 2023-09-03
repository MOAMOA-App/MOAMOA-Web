import { styled } from "styled-components";

export const Wrap = styled.div`
position: relative;
    display: flex;
    @media screen and (min-width: 500px) {
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
export const SettingBtn= styled.button`

position: absolute;
top: 0;
right: 0;
color: #F79331;
font-size: 12px;
font-weight: 500;
`;

