import React, {
    useContext,
    useRef,
    useState,
    FormEvent,
    useEffect,
} from "react";

import logo from "../../assets/images/logo.svg";

import title from "../../assets/images/title.png";
import kakao from "../../assets/images/kakao.svg";
import google from "../../assets/images/google.svg";
import naver from "../../assets/images/naver.svg";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "../../styles/Login.styled";
import { usePostLogin } from "../../queries/postLogin";

interface FormValue {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { isSubmitting, errors },
    } = useForm<FormValue>();

    const {
        mutateAsync: postLogin,
        isLoading = false,
        isError = false,
        error,
    } = usePostLogin();

    const authContext = useContext(AuthContext);
    const [showPswd, setShowPswd] = useState<boolean>(false);

    // 반환된 컨텍스트가 유효한지 확인
    if (!authContext) {
        throw new Error(
            "Login 컴포넌트는 AuthProvider 내에서 사용되어야 합니다."
        );
    }

    const { setAuth } = authContext; // 이제 안전하게 setAuth를 추출할 수 있습니다.

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const emailValue = watch("email");
    const passwordValue = watch("password");

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        let res = postLogin(data);
        console.log(postLogin(data));
        if (typeof setAuth === "function") {
            setAuth((await res).accessToken);
            // localStorage.setItem("name", JSON.stringify(data.email));
            navigate(from);
        }
    };

    return (
        <S.Wrap>
            <S.Logo src={logo} alt="" />
            <S.Tit src={title} alt="" />
            <S.ContForm noValidate onSubmit={handleSubmit(onSubmit)}>
                <S.Inp
                    id="email"
                    type="text"
                    {...register("email", {
                        required: "이메일 주소를 입력해주세요.",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "이메일 형식에 맞지 않습니다.",
                        },
                    })}
                    placeholder="이메일"
                />
                {errors.email && (
                    <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
                )}
                <S.InputCont>
                    <input
                        id="password"
                        // type="password"
                        type={showPswd ? "text" : "password"}
                        {...register("password", {
                            required: "비밀번호를 입력해주세요.",
                        })}
                        placeholder="비밀번호"
                    />
                    <span onClick={() => setShowPswd(!showPswd)}>표시</span>
                </S.InputCont>
                {errors.password && (
                    <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
                )}
                <S.Label htmlFor="stay">
                    <S.Check type="checkbox" id="stay" />
                    로그인 상태 유지
                </S.Label>

                <S.LoginBtn>로그인</S.LoginBtn>
                <S.ContSignUp>
                    <S.SearchId to="/signup">아이디/비밀번호 찾기</S.SearchId>
                    <span> | </span>
                    <S.SignUp to="/signup">회원가입</S.SignUp>
                </S.ContSignUp>
            </S.ContForm>
        </S.Wrap>
    );
};

export default Login;
