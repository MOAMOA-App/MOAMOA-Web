import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "../../styles/SignUp.styled";
import { usePostVerifyEmail } from "../../queries/postVerifyEmail";
import { usePostRequestEmail } from "../../queries/postRequestEmail";
import { usePostResponseEmail } from "../../queries/postResponseEmail";
import { usePostSignUp } from "../../queries/postSignUp";
import { useNavigate, useLocation } from "react-router-dom";

interface FormValue {
    email: string;
    password: string;
    psw?: string;
    code: string;
    token?: string;
    name: string;
}

interface Form2Value {
    code: string;
    token?: string;
}

interface Form3Value {
    email: string;
}

export default function SignUp() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { isSubmitting, errors },
    } = useForm<FormValue>({
        // This criteria will make sure to check the form for errors before submitting
        mode: "onChange",
    });

    const password = watch("password", "");
    const confirmPassword = watch("psw", "");
    // Handler for final sign up submission

    const {
        mutateAsync: postVerifyEmail,
        isLoading = false,
        isError = false,
        error,
    } = usePostVerifyEmail();
    const { mutateAsync: postRequestEmail } = usePostRequestEmail();
    const { mutateAsync: postResponseEmail } = usePostResponseEmail();
    const { mutateAsync: postSignUp } = usePostSignUp();
    const [token, setToken] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Form3Value> = async (data) => {
        try {
            // 이메일 인증 요청을 보내는 함수를 호출합니다.
            const verificationResponse = await postVerifyEmail({
                email: data.email,
            });

            // 인증 응답이 'ok'인 경우 이메일 요청을 보냅니다.
            if (verificationResponse?.message === "OK") {
                const response = await postRequestEmail(data);
                setToken(response.token);
                console.log(response);
            } else {
                console.log(
                    "Verification failed or not confirmed, so email request was not sent."
                );
            }
        } catch (error) {
            // console.error("Error in sending verification or request:", error);
        }
    };

    const onFinalSubmit: SubmitHandler<FormValue> = (data) => {
        console.log("Account Created!", data);
        const formData = {
            name: data.name,
            email: data.email,
            password,
        };
        postSignUp(formData);
        navigate(`/login`);
    };

    const onSubmitCode: SubmitHandler<Form2Value> = async (data) => {
        try {
            // 이메일 인증 요청을 보내는 함수를 호출합니다.
            const verificationResponse = await postResponseEmail({
                code: data.code,
                token,
            });

            console.log(verificationResponse);

            if (verificationResponse.message === "OK") {
                setToggle(true);
            }
        } catch (error) {
            console.error("Error in sending verification or request:", error);
        }
    };

    return (
        <S.Wrap>
            <h1>회원가입</h1>
            <S.Div>
                <S.Form>
                    <S.WrapInp onSubmit={handleSubmit(onSubmit)}>
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
                            <S.ContBtn
                                type="submit"
                                onClick={handleSubmit(onSubmit)}
                                disabled={isLoading}
                            >
                                {token ? "재전송하기" : "인증요청"}
                                {/* {isLoading ? "요청 중..." : "인증요청"} */}
                            </S.ContBtn>
                        </div>
                        {errors.email && (
                            <S.ErrorMessage>
                                {errors.email.message}
                            </S.ErrorMessage>
                        )}
                    </S.WrapInp>
                    <S.WrapInp onSubmit={handleSubmit(onSubmitCode)}>
                        <label htmlFor="numInput">인증번호 입력</label>
                        <div>
                            <input
                                type="number"
                                id="numInput"
                                {...register("code")}
                            ></input>
                            <S.ContBtn
                                type="submit"
                                toggle={toggle}
                                onClick={handleSubmit(onSubmitCode)}
                            >
                                확인
                            </S.ContBtn>
                        </div>
                    </S.WrapInp>

                    <S.WrapInp>
                        <label htmlFor="nameInput"> 닉네임 (선택) </label>
                        <input
                            type="name"
                            id="nameInput"
                            // name="name"
                            {...register("name", {
                                // required: "비밀번호를 입력해주세요.",
                            })}
                        ></input>
                        {/* <p >ㅇ</p> */}
                    </S.WrapInp>

                    <S.WrapInp>
                        <label htmlFor="passwordInput">비밀번호</label>
                        <input
                            type="password"
                            id="passwordInput"
                            {...register("password", {
                                // required: "비밀번호를 입력해주세요.",
                            })}
                        ></input>
                        {errors.password && (
                            <S.ErrorMessage>
                                {errors.password.message}
                            </S.ErrorMessage>
                        )}
                    </S.WrapInp>

                    <S.WrapInp>
                        <label htmlFor="pswInput">비밀번호 확인</label>
                        <input
                            type="password"
                            id="pswInput"
                            {...register("psw", {
                                // required: "비밀번호 확인란을 입력해주세요.",
                                validate: (value) =>
                                    value === password ||
                                    "비밀번호가 일치하지 않습니다.",
                            })}
                        ></input>
                        {errors.psw && (
                            <S.ErrorMessage>
                                {errors.psw.message}
                            </S.ErrorMessage>
                        )}
                    </S.WrapInp>
                </S.Form>
            </S.Div>
            <S.WrapMent>
                <S.Label htmlFor="scales">
                    <input type="checkbox" id="scales" name="scales" />
                    개인정보 수집 동의
                </S.Label>
                <p>자세히 보기</p>
            </S.WrapMent>

            <S.Btn
                onClick={handleSubmit(onFinalSubmit)}
                disabled={Object.keys(errors).length > 0}
            >
                회원가입
            </S.Btn>
        </S.Wrap>
    );
}
