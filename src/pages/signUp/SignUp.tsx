import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import * as S from "../../styles/SignUp.styled";
interface FormValue {
    email: string;
    password: string;
}
export default function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { isSubmitting, errors },
    } = useForm<FormValue>();

    return (
        <S.Wrap>
            <h1>회원가입</h1>
            <S.Div>
                <S.Form>
                    <S.WrapInp>
                        <label htmlFor="emailInput">이메일</label>
                        <div>
                            <input
                                type="text"
                                id="emailInput"
                                placeholder="이메일 주소를 적어주세요."
                                {...register("email", {
                                    required: "이메일 주소를 입력해주세요.",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "이메일 형식에 맞지 않습니다.",
                                    },
                                })}
                            ></input>
                            <button type="button">인증요청</button>
                        </div>
                        {errors.email && (
                            <S.ErrorMessage>
                                {errors.email.message}
                            </S.ErrorMessage>
                        )}
                    </S.WrapInp>
                    <S.WrapInp>
                        <label htmlFor="numInput">인증번호 입력</label>
                        <div>
                            <input type="number" id="numInput"></input>
                            <button type="button">확인</button>
                        </div>
                    </S.WrapInp>
                    <S.WrapInp>
                        <label htmlFor="nameInput"> 이름 </label>
                        <input type="name" id="nameInput" name="name"></input>
                        {/* <p >ㅇ</p> */}
                    </S.WrapInp>
                    <S.WrapInp>
                        <label htmlFor="passwordInput">비밀번호</label>
                        <input
                            type="password"
                            id="passwordInput"
                            name="password"
                            placeholder="비밀번호를 입력하세요."
                        ></input>
                    </S.WrapInp>

                    <S.WrapInp>
                        <label htmlFor="pswInput">비밀번호 확인</label>
                        <input
                            type="password"
                            id="pswInput"
                            name="psw"
                            placeholder="비밀번호를 입력하세요."
                        ></input>
                    </S.WrapInp>
                </S.Form>
            </S.Div>
            <S.WrapMent>
                <S.Label htmlFor="scales">
                    {" "}
                    <input type="checkbox" id="scales" name="scales" />
                    개인정보 수집 동의
                </S.Label>
                <p>자세히 보기</p>
            </S.WrapMent>

            <S.Btn>회원가입</S.Btn>
        </S.Wrap>
    );
}
