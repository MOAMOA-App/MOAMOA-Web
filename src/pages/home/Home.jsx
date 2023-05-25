import React from 'react'
import Card from "../../components/Card";
import styled from 'styled-components';

export default function Home() {
    const arr=[1,2,3,4,5,6]
    return (
        <>
            <Search placeholder="검색어를 입력해주세요."></Search>
            <Div>
                {arr.map((arr)=> <Card/>)}
            </Div>
        </>
    )
}

export const Div = styled.div`
    display: flex;
    width: 1100px;
    flex-wrap: wrap;
`;

export const Search = styled.input`
    align-items: center;
    text-align: center;
    width: 1220px;
    height: 40px;
    border: 1px solid #FF952C;
    border-radius: 30px;
`