import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Profile } from "../../queries/getProfile";
import { useQueryClient } from "@tanstack/react-query";

type ProfileMenuProps = {
    info: Profile;
    type: string;
    setType: (value: string) => void;
};

type ListBtnProps = {
    type?: string; // type prop을 선택적으로 받습니다.
};

export default function ProfileMenu({ info, type, setType }: ProfileMenuProps) {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("컴포넌트는 AuthProvider 내부에서 사용되어야 합니다.");
    }

    const { setAuth } = authContext;
    const queryClient = useQueryClient();

    //로그아웃
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userInfo");
        setAuth("");

        // React Query 캐시 초기화
        queryClient.clear();
    };

    const menuArr = ["생성한 공동구매", "참여한 공동구매", "관심 공동구매"];

    return (
        <Wrap>
            <WrapProfile>
                <ContProfile>
                    <img src="" alt="" />
                    <Name>{info.nick}</Name>
                    <span>{info.email}</span>
                </ContProfile>

                <ListProfile>
                    <dt>나의 활동</dt>

                    {menuArr.map((item) => (
                        <dd>
                            <ListBtn
                                type={item}
                                onClick={() => {
                                    setType(item);
                                }}
                            >
                                {item}
                            </ListBtn>
                        </dd>
                    ))}
                </ListProfile>
                <ListProfile>
                    <dt>계정 설정</dt>
                    <dd>
                        <ListBtn
                            type={type}
                            onClick={() => {
                                setType("setting");
                            }}
                        >
                            나의 프로필
                        </ListBtn>
                    </dd>
                    {/* <dd>
                        <ListBtn
                            type={type}
                            onClick={() => {
                                setType("detail");
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
                        </ListBtn> */}
                    {/* </dd> */}
                    <ListBtn onClick={handleClick}>로그아웃</ListBtn>
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
