import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Card from "../../components/Card";
import { SearchBar } from "../../style/SearchBar";
import search from "../../assets/images/search_orange.svg";
import ham from "../../assets/images/햄버거.svg";

export default function Search() {
  const [menu, setMenu] = useState([
    { title: "제목", checked: false },
    { title: "내용", checked: false },
  ]);
  const arr = [1, 2, 34, 5, 676, 878, 768];

  const handleBtn = (e) => {
    console.log(e.target.checked);
    const list = [...menu];
    list[e.target.title] = !list[e.target.title];
    console.log(list);

    setMenu(list);
    // menu
  };

  return (
    <Wrapper>
      <div>
        <Cont>
          <WrapSearch>
            <img className="ham" src={ham} alt="" />
            <SearchBar>
              <input
                type="text"
                name=""
                id=""
                placeholder="검색어를 입력해주세요."
              />
              <img src={search} alt="" />
            </SearchBar>
          </WrapSearch>
        </Cont>
        <Wrap>
          <Li>
            <span>검색기준</span>
            <div>
              {menu.map((menu) => (
                <Btn
                  checked={menu.checked}
                  title={menu.title}
                  onClick={handleBtn}
                >
                  {menu.title}
                </Btn>
              ))}
            </div>
          </Li>
          <Li>
            <span>카테고리</span>
            <div>
              <button>전체</button>
              <button>관심</button>
              <button>생활</button>
              <button>의류</button>
              <button>식품</button>
              <button>가전</button>
              <button>취미</button>
              <button>운동</button>
              <button>굿즈</button>
              <button>동물</button>
              <button>해외</button>
              <button>기타</button>
            </div>
          </Li>
          <Li>
            <span>진행상태</span>
            <div>
              <button>모집중</button>
              <button>진행중</button>
              <button>거래완료</button>
            </div>
          </Li>
          <Li>
            <span>정렬기준</span>
            <div>
              <button>인기순</button>
              <button>최신순</button>
              <button>마감임박순</button>
            </div>
          </Li>
        </Wrap>
      </div>
      <Div>
        <>
          {arr.map((arr) => (
            <Card />
          ))}
        </>
      </Div>
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export const Cont = styled.div`
  display: flex;
  width: 100vw;
  background: white;
  flex-direction: column;
  align-items: center;
  /* opacity:0.5; */
`;

export const WrapSearch = styled.div`
  display: flex;
  margin-top: 120px;

  position: fixed;
  z-index: 99;


  background-color: rgba(255, 255, 255);
  backdrop-filter: blur(2px);
  /* opacity: 1; */
  width: 740px;
  ${".ham"} {
    position: absolute;
    top: 7px;
    z-index: 2;
    opacity: 1;
  }
`;

//   .slide-top {
// -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
// }

export const Wrap = styled.div`
  margin: 180px auto 20px;
  width: 780px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  z-index: 999;
  opacity: 1;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  gap: 20px 0;
  /* padding: 10px ; */
  @media (max-width: 768px) {
    padding: 26px 10%;
    margin: 0 -40px 40px;
    padding: 10px 40px;
  }
`;

export const Li = styled.li`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 73px 1fr;
  margin: 19px 31px;
  color: #5c5c5c;
  font-family: KoPubWorldDotum_Pro;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  ${"span"} {
    margin-right: 23px;
  }

  ${"button"} {
    min-width: 42px;
    height: 22px;
    border-radius: 15px;
    background: #ff952c;
    color: #fff;
    text-align: center;
    font-family: KoPubWorldDotum_Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-right: 10px;
  }
`;

export const Btn = styled.button`
  background: ${(props) => (props.checked ? "#FF952C;" : "#D9D9D9")};
`;
