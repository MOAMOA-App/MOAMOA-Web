import React from 'react'
import styled,{ css } from 'styled-components';

export default function Category() {

    const arr=["/전체.png","/관심.png","/생활.png","/의류.png","/식품.png","/가전.png","/취미.png","/운동.png","/굿즈.png","/동물.png","/해외.png","/기타.png"];
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
    margin-top: 32px; 
    cursor: pointer;
    ${"img"}{
        margin-bottom: 10px;
        width:46px;
        height: 46px;
    }

`

export const Wrap = styled.div`
    display: flex;
    overflow-x: scroll;
    height: 120px;
    padding: 0 10px;
`

