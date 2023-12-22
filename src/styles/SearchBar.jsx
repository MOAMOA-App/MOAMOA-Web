import styled from 'styled-components';


export const SearchBar = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 80%;
    margin-left: 10%;
    height: 40px;
    border: 1px solid #FF952C;
    border-radius: 30px;
    margin-bottom: 15px;
    padding: 15px;
    background-color: white;
z-index:999;

    ${"input"}{
        margin: 10px;
padding: 5px;
background-color: white;

    opacity:1;
    }
    ${"img"}{
        cursor: pointer;
    }
`