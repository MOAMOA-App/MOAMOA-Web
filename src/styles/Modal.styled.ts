import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes` 
    0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
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
    /* height: 370px; */
    border-radius: 5px;
    box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.25);
    background-color: white;
    animation: ${fadeInUp} 0.5s;
`;
export const List = styled.div`
    display: grid;

    /* background: rgba(247, 147, 49, 0.5); */

    /* overflow-y: scroll; */
`;
export const ListItem = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    height: 72px;
    font-size: 14px;
    cursor: pointer;
    ${"div"} {
        padding: 16px 21px;
    }
    &:hover {
        background: rgba(247, 147, 49, 0.15);
        ${"button"} {
            display: inline;
            margin: 9px 16px 0 0;
        }
    }
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

export const Border = styled.div`
    height: 1px;
    width: 93%;
    background: #d9d9d9;
    margin: -1px 12px 0;
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
export const Menu = styled.button`
    display: none;
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
