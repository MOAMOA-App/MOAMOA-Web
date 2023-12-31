import { apiClient } from "../libary/reactQueryProvider";
import { ApiError, ApiResponse, MutationConfigOptions } from "../types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Request {
    email: string;
}

interface VerifyEmailResponse {
    message: string;
}

type Response = ApiResponse<VerifyEmailResponse>;

const URL_PATH = `api/user/email/verify`;
const MUTATION_KEY = [URL_PATH];

export const postVerifyEmail = async (data: Request) => {
    const res = await apiClient.post<Request, AxiosResponse<Response>>(
        URL_PATH,
        data
    );

    return res.data;
};

export const usePostVerifyEmail = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postVerifyEmail(req),
        ...configOptions?.options,
        onSuccess: (res) => {
        },
        onSettled: () => {
            //   console.log("항상 실행");
        },
        onError: (error) => {},
    });

    return info;
};
