import styled from "styled-components";

export const Category = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-bottom: 6px;
    /* @media ${({ theme }) => theme.device.tablet} {
        flex-direction: column;
        font-size: ${({ theme }) => theme.device.tablet};
    } */
    ${"div"} {
        display: flex;
        align-items: center;
    }
    ${".category"} {
        background: #f79331;
        border-radius: 15px;
        color: #ffffff;
        padding: 6px 9px;
        margin-right: 8px;
    }
    ${".count"} {
    }
    @media (max-width: 768px) {
        /* flex-direction: column; */
        /* font-size: 12px; */
    }
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 8px 0 6px;
    color: #000000;
`;

export const Warp = styled.div`
    background: #ffffff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width: 223px;
    height: 305px;
    padding: 8px;
    @media (max-width: 768px) {
        width: 180px;
        height: 260px;
        /* margin-right: 14px;
    margin-bottom: 14px; */
    }

    cursor: pointer;
`;

export const Img = styled.div`
    height: 205px;
    width: 205px;
    margin: 0 auto;
    display: block;
    ${"img"} {
        width: 100%; /* 혹은 'height: 100%;' */
        object-fit: cover; /* 'cover'는 이미지를 채우면서 비율을 유지합니다. 'contain'은 전체 이미지를 보여줍니다. */
    }
    @media (max-width: 768px) {
        width: 160px;
        height: 160px;
        margin-right: 5px;
    }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 22px;
    color: #8f8f8f;
`;

export const Button = styled.div``;
