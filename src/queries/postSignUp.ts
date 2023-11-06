import { apiClient } from "../libary/reactQueryProvider";
import { ApiError, ApiResponse, MutationConfigOptions } from "../types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Request {
    email: string;
    name: string;
    password: string;
}

interface VerifyEmailResponse {
    message: string;
}

type Response = ApiResponse<VerifyEmailResponse>;

const URL_PATH = `api/user/signup`;
const MUTATION_KEY = [URL_PATH];

export const postSignUp = async (data: Request) => {
    const res = await apiClient.post<Request, AxiosResponse<Response>>(
        URL_PATH,
        data
    );

    return res.data;
};

export const usePostSignUp = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postSignUp(req),
        ...configOptions?.options,
        onSuccess: (res) => {},
        onSettled: () => {
            //   console.log("항상 실행");
        },
        onError: (error) => {},
    });

    return info;
};
