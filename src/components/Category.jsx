import React from 'react'
import styled,{ css } from 'styled-components';

export default function Category() {

    const arr=["/전체.svg","/관심.svg","/생활.svg","/의류.svg","/식품.svg","/가전.svg","/취미.svg","/운동.svg","/굿즈.svg","/동물.svg","/해외.svg","/기타.svg"];
  return (

    <Wrap>
                {arr.map((arr)=> 
                <Div>
                    <img src={arr} alt="" />
                    {arr.slice(1,3)}
                </Div>
                
                )}

    </Wrap>
  )
}

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 55px;
    margin-top: 32px; 
    cursor: pointer;
    ${"img"}{
        margin-bottom: 10px;
        width:40px;
        height: 40px;
    }

`

export const Wrap = styled.div`
    display: flex;
    overflow-x: scroll;
    height: 120px;
    padding: 0 10px;
`

