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
    text-align: center;
    position: relative;
    margin: auto;
    width: 305px;
    height: 100vh;
    background-color: white;
    width: 520px;
    height: 250px;
    padding: 12px;
    border-radius: 5px;

    box-shadow: 0px 2px 5px 3px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 700;
    display: block;
    padding-bottom: 9px;
    border-bottom: 1px solid #d9d9d9;
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

export const Count = styled.div`
    color: #000;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    margin: 19px 0 3px;

    ${"span"} {
        font-weight: 700;
    }
    ${"input"} {
        border: 1px solid #5c5c5c;
        text-align: center;

        width: 44.256px;
        height: 27.335px;
        margin: 3px 10px;
        padding-left: 10px;
        font-size: 18px;
        font-weight: 500;
        line-height: normal;
    }
    ${"img"}:last-child {
        vertical-align: bottom;
    }
    ${"label"} {
        margin-left: 5px;
    }
`;

export const PriceCont = styled.div`
    color: #2c9b36;
    margin: 15px 0 19px;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
    ${"img"} {
        vertical-align: text-top;
        margin-right: 3px;
    }
`;
