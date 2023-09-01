import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes` 
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
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
    position: absolute;
    top: 70px;
    right: 12vw;
    width: 305px;
    height: 370px;
    background-color: white;
    border: 1px solid #0f0b19;
    border-radius: 10px 10px 0 0;
    padding-bottom: 10px;
    animation: ${fadeInUp} 0.5s;
`;
export const List = styled.div`
    /* overflow-y: scroll; */
`;
export const ListItem = styled.div`
    position: relative;
    padding: 10px 21px;
    height: 72px;
    background: rgba(247, 147, 49, 0.5);
    border: 1px solid black;
    font-size: 14px;

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
