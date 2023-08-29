import styled from "styled-components";

export const Label = styled.label`
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #8f8f8f;
`;
export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px auto;
    padding: 27px 0;
    width: 420px;
    height: 594px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
    ${"h1"} {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: #f79331;
        margin-bottom: -8px;
    }
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: flex-start;
    margin-top: 35px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ErrorMessage = styled.p`
    margin: -6px 4px 4px;
    text-align: left;
    color: #f79331;
    font-size: 12px;
    font-weight: 700;
`;


export const WrapInp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 23px;

    ${"label"} {
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #5c5c5c;
    }
    ${"input"} {
        border-bottom: 1px solid #f79331;
        width: 254px;
        margin-right: 12px;
        padding: 0 5px;

        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
    }
    ${"button"} {
        color: white;
        width: 91px;
        height: 28px;
        background: #f79331;
        border: 1px solid #f79331;
        border-radius: 15px;
    }
`;

export const WrapMent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 356px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #8f8f8f;
    align-items: flex-end;
    margin-bottom: 32px;
    ${"p"} {
        border-bottom: 1px solid #8f8f8f;
        cursor: pointer;
    }
`;

export const Inp = styled.input`
    border: 1px solid #f79331;
    border-radius: 1550px;
    margin: 0 0 10px;
    padding: 0 18px;
    width: 356px;
    height: 40px;
`;

export const Btn = styled.button`
    width: 356px;
    height: 40px;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    background: #2c9b36;
    border-radius: 50px;
    margin: 10px 0;
    color: white;
`;
