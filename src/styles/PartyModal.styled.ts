import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 100;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;
export const Wrap = styled.form`
    position: relative;
    margin: auto;
    width: 305px;
    height: 100vh;
    background-color: white;
    width: 520px;
    height: 250px;
    padding: 77px 32px;
    border-radius: 5px;

    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
`;

export const Cancle = styled.img`
    position: absolute;
    top: 43px;
    right: 22px;
`;

export const List = styled.div`
    display: grid;
    gap: 1px 0;
    background: rgba(247, 147, 49, 0.5);

    /* overflow-y: scroll; */
`;
export const ListItem = styled.div`
    position: relative;
    padding: 16px 21px;
    height: 72px;
    /* border: 1px solid black; */
    background: white;
    font-size: 14px;
    &:first-child {
        // 마지막 <button> 태그에만 적용이 된다
        border-radius: 5px 5px 0px 0px;
    }
    &:last-child {
        // 마지막 <button> 태그에만 적용이 된다
        border-radius: 0px 0px 5px 5px;
    }
    /* margin: 0 13px; */
`;

export const Title = styled.span`
    color: #000;
    font-weight: 700;
    margin-right: 5px;
`;

export const ListContent = styled.span`
    color: #5c5c5c;
`;

export const ListDate = styled.p`
    position: absolute;
    right: 0px;
    bottom: 0px;
    padding: 10px 21px;
    color: #5c5c5c;
    font-size: 11px;
    font-weight: 500;
`;

export const CancelBtn = styled.button`
    position: relative;
    width: 100%;
    height: 36px;
    border-radius: 10px 10px 0 0;
    &:hover {
        cursor: pointer;
        background-color: #0f0b19;
    }
`;

export const ProfileCont = styled.div`
    display: flex;
    align-items: center;
`;

export const BtnCont = styled.div`
    display: flex;
    font-size: 20px;
font-style: normal;
font-weight: 700;
    ${"button"}:first-child {
        flex: 1;
        border-radius: 3px;
        background: #d9d9d9;
        color: white;
        height: 40px;
        margin: 9px;
        font-size: 14px;
        font-weight: 700;
    }
    ${"button"}:last-child {
        flex: 1;
        border-radius: 3px;
        background: #2c9b36;
        color: white;
        height: 40px;
        margin: 9px;
        font-size: 14px;
        font-weight: 700;
    }
`;
