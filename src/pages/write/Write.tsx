import React from 'react'


type WhiteProps = {
    name: string;
    mark: string;

  };
  

  function White({ name, mark }: WhiteProps) {




    return (
      <div>

        <img src="" alt="" />
        
        Hello, {name} {mark}
      </div>
    );
  }
  
  White.defaultProps = {
    mark: '!'
  };
  
  export default White;