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
      <div>
        <img src="" alt="" />
        <label for="scales">제목</label><input type="name" id="scales" />
        <p>카테고리</p> 
        {arr.map((arr)=> 
        <button>{arr}</button>)
        }
        <label for="scales">상품가격</label><input type="name" id="scales" />
        <label for="scales">모집개수</label><input type="name" id="scales" />
        <label for="scales">상세정보 및 내용</label><input type="name" id="scales" />
        <label for="scales">주소입력</label><input type="name" id="scales" />
        <label for="scales">주소찾기</label><input type="name" id="scales" />
        <label for="scales">상세주소</label><input type="name" id="scales" />

        Hello, {name} {mark}
        {optional && <p>{optional}</p>}
        <div>
            <button onClick={handleClick}>버튼이지롱</button>
        </div>
      </div>
    );
  }
  
  Write.defaultProps = {
    mark: '!'
  };
  
  export default Write;