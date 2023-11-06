import { apiClient } from "../libary/reactQueryProvider";
import { ApiError, ApiResponse, MutationConfigOptions } from "../types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Request {
    email: string;
}

interface RequestEmailResponse {
    token: string;
    msg: string;
}

type Response = ApiResponse<RequestEmailResponse>;

const URL_PATH = `api/user/email/request`;
const MUTATION_KEY = [URL_PATH];

export const postRequestEmail = async (data: Request) => {
    const res = await apiClient.post<Request, AxiosResponse<Response>>(
        URL_PATH,
        data
    );

    return res.data;
};

export const usePostRequestEmail = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postRequestEmail(req),
        ...configOptions?.options,
        onSuccess: (res) => {},
        onSettled: () => {
            //   console.log("항상 실행");
        },
        onError: (error) => {},
    });

    return info;
};
