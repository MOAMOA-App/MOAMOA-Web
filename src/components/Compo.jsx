import React from 'react'
import styled from 'styled-components';

export default function Compo() {
  return (
    <Wrap>
        <p class="ment">마감이 가까워요</p>
        <Cont>
            <p class="tit">마감 임박</p>
            <p>전체보기 ></p>
        </Cont>
    </Wrap>
  )
}

export const Wrap = styled.div`
    display:flex;
    flex-direction: column;
    padding:0 7px;
    line-height: 22px;

    margin:11px;
    border-left: #2C9B36 solid 10px;
    ${".ment"}{
        font-weight: 500;
        font-size: 14px;
        color: #8F8F8F; 
    }
    ${".tit"}{
        font-weight: 700;
        font-size: 24px;
        color: #2C9B36;
    }
`;

export const Cont = styled.div`
    display:flex;
    justify-content: space-between;
    color: #2C9B36;
    font-weight: 700;
    font-size: 14px;
    
`;