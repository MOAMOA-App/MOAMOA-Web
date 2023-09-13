import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(-100%, 0 , 0);
    }
    100% {
        opacity: 1;
        transform: translateZ(0);
    }
`;

export const Back = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 100;
    box-sizing: border-box;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: flex-end; */
`;
export const Wrap = styled.div`
    position: relative;

    width: 305px;
    height: 100vh;
    background-color: white;
    animation: ${fadeInLeft} 0.5s;
    padding: 77px 32px;
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

// .bar_modal {
//     position: absolute;
//     top: 16px;
//     left: 170px;
//     border: 2px solid #dbdbdb;
//     border-radius: 5px;
//     width: 50px;
// }

// .btn_modal {
//     height: 46px;
//     width: 100%;
// }

// .btn_modal:hover {
//     cursor: pointer;
//     font-weight: 600;
//     color: white;
//     background-color: #0f0b19;
//     transition: 0.5s;
// }

export const Write = styled(Link)`
    /* width: 132px; */
    height: 40px;
    display: flex;
    background: #f79331;
    border-radius: 3px;
    align-items: center;
    text-align: center;
    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
    padding: 14px;
    align-items: flex-start;
    justify-content: center;

    ${"img"} {
        margin-right: 4px;
    }
`;

export const Icon = styled.img`
    margin-right: 15px;
`;

export const Profile = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    margin-right: 13px;
`;

export const MenuCont = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const ProfileCont = styled.div`
    display: flex;
    align-items: center;
`;

export const ListCont = styled.div`
    margin: 15px -32px;
    border: 1px solid #d9d9d9;
    padding: 23px 32px;
    ${"button"} {
        display: block;
        margin-bottom: 18px;
        font-size: 14px;
        font-weight: 700;
    }
`;
