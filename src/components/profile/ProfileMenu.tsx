import React from "react";
import styled from "styled-components";

type ProfileMenuProps = {
    type: string;
    setType: (value: string) => void;
};

type ListBtnProps = {
    type?: string;  // type prop을 선택적으로 받습니다.
};


export default function ProfileMenu({ type, setType }: ProfileMenuProps) {
    return (
        <Wrap>
            <WrapProfile>
                <ContProfile>
                    <img src="" alt="" />
                    <Name>초록개구리</Name>
                    <span>lgirn@naver.com</span>
                </ContProfile>

                <ListProfile>
                    <dt>내 활동</dt>
                    <dd>
                        <ListBtn
                            type={type}
                            onClick={() => {
                                setType("create");
                            }}
                        >
                            생성한 공동구매
                        </ListBtn>
                    </dd>
                    <dd>
                        <ListBtn
                            type={type}
                            onClick={() => {
                                setType("create");
                            }}
                        >
                            참여한 공동구매
                        </ListBtn>
                    </dd>
                    <dd>
                        <ListBtn
                            type={type}
                            onClick={() => {
                                setType("create");
                            }}
                        >
                            관심 공동구매
                        </ListBtn>
                    </dd>
                </ListProfile>
                <ListProfile>
                    <dt>내 정보</dt>
                    <dd>
                        <ListBtn
                            type={type}
                            onClick={() => {
                                setType("setting");
                            }}
                        >
                            내 프로필
                        </ListBtn>
                    </dd>
                    <dd>
                        <ListBtn
                            type={type}
                            onClick={() => {
                                setType("create");
                            }}
                        >
                            알림설정
                        </ListBtn>
                    </dd>
                    <dd>
                        <ListBtn
                            type={type}
                            onClick={() => {
                                setType("create");
                            }}
                        >
                            환경설정
                        </ListBtn>
                    </dd>
                    <ListBtn>로그아웃</ListBtn>
                </ListProfile>
            </WrapProfile>
        </Wrap>
    );
}

// const setHiright = (type) => {
//   switch (type) {
//     case "create":
//       return stylesAnswer;
//     case "false":
//       return stylesFalse;
//   }
// };

export const Wrap = styled.div`
    margin: 0 2rem;
    ${"img"} {
        width: 160px;
        height: 160px;
        background-color: black;
        border-radius: 50%;
    }
`;

export const Name = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 37px;
    margin-top: 11px;
`;
export const WrapProfile = styled.div`
    /* padding: 0 110px; */
    width: 265px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContProfile = styled.div`
    /* padding: 0 110px; */
    width: 265px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0 64px;
`;

export const ListProfile = styled.dd`
    width: 197px;
    margin-bottom: 29px;

    ${"dt"} {
        border-bottom: 1px solid #2c9b36;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
    }
`;

export const ListBtn = styled.button<ListBtnProps>`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;

    margin: 6px 0;
    &:hover {
        font-weight: 700;
    }
`;
