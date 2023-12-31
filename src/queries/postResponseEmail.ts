import { apiClient } from "../libary/reactQueryProvider";
import { ApiError, ApiResponse, MutationConfigOptions } from "../types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Request {
    token: string;
    code: string;
}

interface ResponseEmailResponse {
    message: string;
}

type Response = ApiResponse<ResponseEmailResponse>;

const URL_PATH = `api/user/email/response`;
const MUTATION_KEY = [URL_PATH];

export const postResponseEmail = async (data: Request) => {
    const res = await apiClient.put<Request, AxiosResponse<Response>>(
        URL_PATH,
        data
    );

    return res.data;
};

export const usePostResponseEmail = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postResponseEmail(req),
        ...configOptions?.options,
        onSuccess: (res) => {},
        onSettled: () => {
            //   console.log("항상 실행");
        },
        onError: (error) => {},
    });

    return info;
};
