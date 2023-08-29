import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
    display: flex;
    position: fixed;
    background-color: white;
    width: 100vw;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 0 110px;
    height: 70px;
    /* margin-top: ; */
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;

export const LogoCont = styled(Link)`
${"img"}{
    max-width: 166px;
}    
`;

export const Wrap = styled.div`
    display: flex;
`;

export const Write = styled(Link)`
    width: 132px;
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
    margin-right: 10px;

    ${"img"} {
        margin-right: 4px;
    }
`;

export const Icon = styled(Link)`
    background: #f79331;

    background: url('/chat.svg') no-repeat ;
    width: 40px;
    height: 40px;
    /* margin: 3px 0 0 20px ; */
    margin: 0 8px;
`;

export const Profile = styled.button`
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 50%;
    background-color: black;
`;

export const Main = styled.main`
    padding-top: 110px;
    margin: 0 8%;
`;
