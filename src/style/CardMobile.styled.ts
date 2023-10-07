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

export const Wrap = styled.div`
    display: flex;
    background: #ffffff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    height: 122px;
    /* width: 100vw; */
    padding: 18px 25px;

    cursor: pointer;
`;

export const Cont = styled.div`
line-height: 18px;
    flex-grow: 1;
    ${".place"} {
        margin-bottom: 10px;
    }
    ${".day"} {
        color: red;
    }
`;

export const TitleCont = styled.div`
    display: flex;
    justify-content: space-between;
    ${"h2"} {
        font-weight: 800;
    }
    ${"span"} {
        font-weight: 600;
        color: #2c9b36;
    }
`;
export const CountCont = styled.div`
    display: flex;
    justify-content: space-between;

    ${"span"} {
        color: #f79331;
    }
`;
// export const Cont = styled.div`
//     flex-grow: 1;
// `;
export const Img = styled.image`
    height: 85px;
    width: 85px;
    margin-right: 14px;
    background: #f79331;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 22px;
    color: #8f8f8f;
`;

export const Button = styled.div``;
