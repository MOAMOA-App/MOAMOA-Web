import React from 'react'

type WriteProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick : (name : string) => void; //함수타입을 가져오고 싶을때
  };
  
  function Write({ name, mark, optional, onClick }: WriteProps) {
    const handleClick = () => {
        console.log('버튼이 클릭되었습니다.');
      };
    return (
      <div>
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