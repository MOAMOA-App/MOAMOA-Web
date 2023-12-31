import { apiClient } from "../libary/reactQueryProvider";
import { ApiError, ApiResponse, MutationConfigOptions } from "../types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Request {
    productId : number,
    status : string
}

interface RequestEmailResponse {
    product: number;
    status: boolean;
    message: string;
}

type Response = ApiResponse<RequestEmailResponse>;
const URL_PATH = `product`;
const MUTATION_KEY = [URL_PATH];

export const postSearch = async (data: Request) => {
    const res = await apiClient.post<Request, AxiosResponse<Response>>(
        URL_PATH,
        data
    );

    return res.data;
};

export const usePostSearch = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postSearch(req),
        ...configOptions?.options,
        onSuccess: (res) => {},
        onSettled: () => {
            //   console.log("항상 실행");
        },
        onError: (error) => {},
    });

    return info;
};
