import React from 'react'
import styled,{ css } from 'styled-components';
import profile from  "../assets/images/profile.png";
import img from  "../assets/images/img.svg";

export default function ChatPage() {
  return (
    <Wrap>
        <Cont>
            <Profile>
                <img src={profile} alt="" />
                <NameBox>
                    <div>
                        <span class="nick">닉네임</span>
                        <span class="block">차단/신고하기</span>
                    </div>
                    <span class="address">거주지역 미정</span>
                </NameBox>
            </Profile>
            <StopBtn>대화종료</StopBtn>
        </Cont>
        <ContChat>

            <ChatBox> 
                <ChatTime>
                    <span>11: 30 <br /></span>
                    <span>읽음</span>
                </ChatTime>
                <ChatText>
                    안녕하세요 
                </ChatText>
            </ChatBox>
        </ContChat>
        <ChatInput >
            <img src={img} alt="" />
            <Input placeholder="메세지를 입력하세요"/>

            <SendBtn>보내기</SendBtn>
        </ChatInput>
    </Wrap>
  )
}

export const Wrap = styled.div`
    display: flex;
    width: 900px;
    height: 500px;
    /* border: 1px solid black; */
    flex-direction: column;
    
`;

export const Cont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 20px;
`;


export const Profile = styled.div`
    display: flex;

    `;

export const NameBox = styled.div`
    margin: 0 27px;
    ${".nick"}{
        margin-right: 15px;
        color: #000;
        font-size: 18px;
        font-family: KoPubWorldDotum_Pro;
        font-weight: 500;
    }
    ${".block"}{
        color: #8F8F8F;
        font-size: 14px;
        font-family: KoPubWorldDotum_Pro;
        font-weight: 500;
    }
    ${".address"}{
        color: #8F8F8F;
        font-size: 14px;
        font-family: KoPubWorldDotum_Pro;
        font-weight: 500;
    }

`;

export const StopBtn = styled.button`
width: 97px;
height: 40px;
border-radius: 20px;
background: #F79331;
color: #FFF;

`;

export const ContChat = styled.div`
    border-top: 1px solid #F79331;
    padding: 20px 0;
    display: flex;
    flex-direction: column-reverse;
    text-align: right;
    align-items: flex-end;
`;

export const ChatText = styled.div`
    max-width: 430px;
    height: 40px;
    border-radius: 20px;
    background: #F79331;
    margin: 12px;
    padding: 0 22px;
    font-size: 12px;
    /* display: inline-block; */
    position: relative;
    /* left: 100px; */
    display: flex;
    align-items: center;
    color: #FFF;
    font-size: 16px;
    font-family: KoPubWorldDotum_Pro;
    font-weight: 500;
`;



export const ChatBox = styled.div`

    display: flex;
    align-items: center;

`;


export const ChatTime = styled.div`
color: #F79331;
text-align: center;
font-size: 14px;
font-family: KoPubWorldDotum_Pro;
font-weight: 500;
`;

export const ChatInput = styled.div`
    display: flex;
    align-items: center;
height: 50px;
    border-radius: 20px;
border: 1px solid #F79331;
font-size: 16px;
font-family: KoPubWorldDotum_Pro;
font-weight: 500;
padding: 10px;
margin: 15px;
margin-top: 400px;
`;

export const Input = styled.input`
width: 100%;
 
`;

export const SendBtn = styled.button`
width: 59px;
height: 27px;
border-radius: 20px;
background: #F79331;
color: white;
`;