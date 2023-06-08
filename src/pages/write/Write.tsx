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
            <label for="scales">상품가격</label><div><Inp type="name" id="scales" required/>원</div>
            <label for="scales">모집개수</label><div><Inp type="name" id="scales" required/>개 
                <Checklabel for="scales"> <Check type="checkbox" id="scales" name="scales" />개수 제한 없음</Checklabel>
            
            </div>
            
        </Wrap>

            <label for="scales">상세정보 및 내용</label>
            <TextArea
                        type="text"
                        placeholder="게시글 입력하기"
                        required
                        />

        <Wrap2>
            <div class="second1">
                <label for="scales">주소입력</label>
                <div class="radio">
                    <label for="scales"> <Check type="checkbox" id="scales" name="scales" />직거래</label>
                    <label for="scales"> <Check type="checkbox" id="scales" name="scales" />온라인</label>

                </div>
                <Checklabel for="scales">주소찾기</Checklabel><Inp2 type="name" id="scales" required/>
                <Checklabel for="scales"></Checklabel><Inp2 type="name" id="scales" placeholder="상세주소를 입력해주세요"/>
            </div>
            <div class="second2">
                Hello, {name} {mark}
            </div>

        {optional && <p>{optional}</p>}
        </Wrap2>

        <div>
            <BtnSave onClick={handleClick}>등록하기</BtnSave>
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
    margin-top: 40px;
    ${"input"}{
        /* width: 216px; */
        border-bottom: 1px solid #D9D9D9;
        margin-right: 5px;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
    }

    ${"label"}{
        font-weight: 700;
        font-size: 16px;
    }
`;

export const Checklabel = styled.label`

`;

export const Check = styled.input`

`;


export const Wrap = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 100px 900px; 
    gap: 20px; 
`;

export const Inp = styled.input`
    width: 216px;
    height: 35px;
    border: 1px solid #D9D9D9;
    border-radius: 1550px;
`;

export const Inp2 = styled.input`
    width: 340px;
    height: 35px;
    border: 1px solid #D9D9D9;
    border-radius: 1550px;
`;

export const Wrap2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    ${".second1"}{

    width: 418px;
    }

    ${".second2"}{
        width: 439px;
height: 230px;
background: red;
margin-left: 60px;
margin-bottom: 30px;
    }
    ${"div"}{
        display: flex;
        flex-direction: column; 
    }
    ${"input"}{
        /* width: 316px; */
        border-bottom: 1px solid #D9D9D9;
        margin-right: 5px;
        margin: 6px 0;
    }

    ${"label"}{
        font-weight: 700;
        font-size: 16px;
    }
    ${".radio"}{
        display: flex;
        flex-direction: row; 
    }
`;

export const TextArea = styled.textarea`
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    margin: 10px 0 20px;
`;

export const Btn = styled.button`
    width: 55px;
    height: 29px;
    background: #D9D9D9;
    border-radius: 15px;
    font-weight: 500;
    font-size: 14px;
    margin: 0 7px;
 `;
export const BtnSave = styled.button`
width: 916px;
height: 40px;
background: #D9D9D9;
border-radius: 3px;

font-weight: 700;
font-size: 20px;
line-height: 31px;
/* identical to box height */

text-align: center;

color: #FFFFFF;
`;

  export default Write;