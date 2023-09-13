import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.img`
    margin: 93px 0 13px;
    width: 56px;
    height: 57px;
`;

export const Tit = styled.img`
    width: 164px;
    height: 43px;
    margin-bottom: 35px;
`;

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
    width: 420px;
    height: 560px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const ContForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    /* align-items: flex-start; */
`;

export const SnsLoginCont = styled.div`
    width: 227px;
    margin: auto;
    ${"img"} {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }
`;

export const InputCont = styled.div`
    border: 1px solid #f79331;
    border-radius: 1550px;
    margin: 0 0 10px;
    width: 356px;
    height: 40px;
    position: relative;
    ${"input"} {
        width: 100%;
        height: 100%;
        padding: 0 18px;
        border-radius: 1550px;
    }

    ${"span"} {
        position: absolute;
        top: 12px;
        right: 20px;
        color: #f79331;
        font-size: 14px;
        cursor: pointer;
        &:hover{
            font-weight: 700;
        }
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

export const ErrorMessage = styled.p`
    margin: -6px 4px 4px;
    text-align: left;
    color: #f79331;
    font-size: 12px;
    font-weight: 700;
`;

export const Check = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid #f79331;
    border-radius: 50%;
    position: relative;
    margin-right: 5px;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #f79331;
    }
`;

export const LoginBtn = styled.button`
    width: 356px;
    height: 40px;
    background: #2c9b36;
    border-radius: 50px;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 10px 0;
    color: white;
`;

export const SearchId = styled(Link)`
    color: #8f8f8f;
    font-weight: 500;
    font-size: 14px;
`;
export const ContSignUp = styled.div`
    margin: auto;
`;

export const SignUp = styled(Link)`
    color: #5c5c5c;
    font-weight: 700;
    font-size: 14px;
`;

export const LoginSns = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #5c5c5c;
    margin: 30px 0 12px;
`;
