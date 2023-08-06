import React from 'react'
// import { Div } from '../style/Card';
import styled from 'styled-components';

export default function Card({type, setType}) {
    return (
        <Div  onClick={() => { setType("detail") }}>
            <Category>
                <div>
                    <p className="category">식품</p>
                    <p className="place">사당역</p>
                </div>
                <p className="count">0/13명 참여</p>
            </Category>
            <Img>d</Img>
            <Title>밀양 얼음골 사과</Title>
            <Bottom>
                <p>D-65</p>
                <Button>하트</Button>
            </Bottom>
        </Div>
        
    )
}

export const Category = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-bottom: 6px;
    /* @media ${({ theme }) => theme.device.tablet } {
        
  flex-direction: column;
  font-size: ${({ theme }) => theme.device.tablet};
} */
    ${"div"}{
        display: flex;
        align-items: center;
    }
    ${".category"}{
        background: #F79331;
        border-radius: 15px;
        color: #FFFFFF;
        padding: 6px 9px;
        margin-right:8px ;
    }
    ${".count"}{
        
    }
@media (max-width: 768px) {
    /* flex-direction: column; */
    /* font-size: 12px; */
  }
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 8px 0 6px;
    color: #000000;
`;

export const Div = styled.div`
    background: #FFFFFF;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    width:223px;
    height:305px;
    padding:8px;
    margin-right: 26px;
      @media (max-width: 768px) {
    width:180px;
    height:260px;
    /* margin-right: 14px;
    margin-bottom: 14px; */

  }

  cursor: pointer;
`;


export const Img = styled.image`
    height: 205px;
    width: 205px;
    background: #F79331;
    margin: 0 auto;
    display: block;
          @media (max-width: 768px) {
    width:160px;
    height:160px;
    margin-right: 5px;

  }
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 22px;
    color: #8F8F8F;
`;

export const Button = styled.div`

`;