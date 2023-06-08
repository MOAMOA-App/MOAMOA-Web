import React from 'react'
import Card from "../../components/Card.tsx";
import Compo from "../../components/Compo.tsx";
import Category from "../../components/Category.tsx";
import styled from 'styled-components';

export default function Home() {
    const arr=[1,2,3,4,5,6]
    return (
        <Wrap>
            <Search placeholder="검색어를 입력해주세요."></Search>
            <Category></Category>
            <Event></Event>
            <Compo></Compo>
        <Div>
            <>
                {arr.map((arr)=> <Card/>)}
            </>

        </Div>

        <Compo></Compo>
        <Div>
            <>
                {arr.map((arr)=> <Card/>)}
            </>

        </Div>

        <Compo></Compo>
        <Div>
            <>
                {arr.map((arr)=> <Card/>)}
            </>

        </Div>
        </Wrap>
    )
}
export const Wrap = styled.div`
    padding: 26px 10% ;
    /* border-top: 0.5px solid rgba(0, 0, 0, 0.1); */
`;
export const Div = styled.div`
    display: flex;
    margin:0 auto 40px;
    overflow-x: scroll;
    padding: 10px;

`;
export const Event = styled.div`
    height: 228px;
    background: #F5F5F5;
    margin: 28px 0 21px ;

`;
export const Search = styled.input`
    align-items: center;
    text-align: center;
    width: 100%;
    height: 40px;
    border: 1px solid #FF952C;
    border-radius: 30px;
`