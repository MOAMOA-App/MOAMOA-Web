import React from 'react'
import styled from 'styled-components';

type WriteProps = {
    name: string;
    mark: string;
    arr: string;
    optional?: string;
    onClick : (name : string) => void; //함수타입을 가져오고 싶을때
  };
  
  function Write({ name, mark, optional, onClick }: WriteProps) {
    
    const arr=["전체","관심","생활","의류","식품","가전","취미","운동","굿즈","동물","해외","기타"];

    const handleClick = () => {
        console.log('버튼이 클릭되었습니다.');
      };
    return (
      <Div>
        <img src="" alt="" />
        <Wrap>
            <label for="scales">제목</label><input type="name" id="scales" placeholder="제목을 입력하세요" required/>
            <label>카테고리</label> 
            <div>
                {arr.map((arr)=> 
                    <Btn>{arr}</Btn>)
            }
            </div>
            <label for="scales">상품가격</label><Inp type="name" id="scales" required/>
            <label for="scales">모집개수</label><Inp type="name" id="scales" required/>
        </Wrap>
        <Wrap2>

        <div>
            <label for="scales">상세정보 및 내용</label>
            <textarea
                        type="text"
                        placeholder="게시글 입력하기"
                        required
                    />
        </div>
        <div>
            <label for="scales">주소입력</label><input type="name" id="scales" required/>
            <label for="scales">주소찾기</label><Inp type="name" id="scales" required/>
            <label for="scales"></label><Inp type="name" id="scales" placeholder="상세주소를 입력해주세요"/>
        </div>
        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
        </Wrap2>

        <div>
            <button onClick={handleClick}>버튼이지롱</button>
        </div>
      </Div>
    );
  }
  
  Write.defaultProps = {
    mark: '!'
  };

  export const Div = styled.div`
    display: flex;
    flex-direction: column;
    padding:0 10% 10px;

    ${"input"}{
        width: 827px;
        border-bottom: 1px solid #D9D9D9;
    }

    ${"label"}{
        font-weight: 700;
        font-size: 16px;
    }
`
export const Wrap = styled.div`
    display: grid;
    grid-template-columns: 100px 600px; 
    gap: 30px; 
`;

export const Wrap2 = styled.div`
    display: grid;
 
      grid-template-columns: 2fr 1fr 2fr; 
      /*반응형으로 조작되는 fr단위(박스요소만-글자는 px단위이기때문에 반응형X)*/
      grid-template-rows: 100px;


    ${"div"}{
        display: flex;
        flex-direction: column; 
    }
`;

export const Btn = styled.button`
    width: 55px;
    height: 29px;
    background: #D9D9D9;
    border-radius: 15px;
    font-weight: 500;
    font-size: 14px;
    margin: 0 14px;
 `;

export const Inp = styled.input`
    width: 216px;
    height: 35px;
    border: 1px solid #D9D9D9;
    border-radius: 1550px;
`;

  export default Write;