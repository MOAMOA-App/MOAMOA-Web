import React from "react";
import styled from "styled-components";

export default function ProfileSetting() {
  return (
    <Wrap>
      <Cont>
        <h2>내 프로필</h2>
        <Box>
          <Title>닉네임</Title>
          <span>초로개구리</span>
        </Box>
        <Box>
          <Title>이메일</Title>
          <span>lgrin02@naver.com</span>
        </Box>
        <Box>
          <Title>지역</Title>
          <span>서울특별시 종로구</span>
          <Btn>변경</Btn>
        </Box>
      </Cont>
      <Cont>
        <h2>계정 정보 변경</h2>
        <Box>
          <Label>현재 비밀번호</Label>
          <Inp
            type="text"
            name=""
            id=""
            placeholder="현재 비밀번호를 입력하세요."
          />
        </Box>
        <Box>
          <Label>새 비밀번호</Label>
          <Inp
            type="text"
            name=""
            id=""
            placeholder="새 비밀번호를 입력하세요."
          />
        </Box>
        <Box>
          <Label>새 비밀번호 확인</Label>
          <Inp type="text" name="" id="" />

          <Btn>수정</Btn>
        </Box>
      </Cont>
    </Wrap>
  );
}

export const Wrap = styled.div`
  width: 970px;
  height: 680px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 28px 31px;
  margin-top: 25px;
`;

export const Cont = styled.div`
  ${"h2"} {
    font-size: 18px;
    font-family: KoPubWorldDotum_Pro;
    font-weight: 700;
  }
  margin-bottom: 67px;
`;

export const Box = styled.div`
  display: flex;
  margin: 16px 0;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #8f8f8f;
  width: 137px;
`;

export const Title = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #8f8f8f;
  width: 137px;
`;

export const Inp = styled.input`
  width: 248px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid #d9d9d9;
  padding: 0 15px;
`;

export const Btn = styled.button`
  width: 56px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #2c9b36;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-family: KoPubWorldDotum_Pro;
  font-weight: 700;
  margin: 0 16px;
`;
