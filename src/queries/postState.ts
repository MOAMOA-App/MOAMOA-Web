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

const URL_PATH = `product/status`;
const MUTATION_KEY = [URL_PATH];

export const postState = async (data: Request) => {
    const res = await apiClient.put<Request, AxiosResponse<Response>>(
        URL_PATH,
        data
    );

    return res.data;
};

export const usePostState = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postState(req),
        ...configOptions?.options,
        onSuccess: (res) => {},
        onSettled: () => {
            //   console.log("항상 실행");
        },
        onError: (error) => {},
    });

    return info;
};
