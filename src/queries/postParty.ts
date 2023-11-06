import { apiClient } from "../libary/reactQueryProvider";
import { ApiError, ApiResponse, MutationConfigOptions } from "../types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Request {
    address: string;
    count: number;
    buyer: number;
    product: number;
}

interface RequestEmailResponse {
    product: number;
    status: boolean;
    message: string;
}

type Response = ApiResponse<RequestEmailResponse>;

const URL_PATH = `api/product`;
const MUTATION_KEY = [URL_PATH];

export const postParty = async (data: Request) => {
    const res = await apiClient.post<Request, AxiosResponse<Response>>(
        `${URL_PATH}/${data.product}/party`,
        data
    );

    return res.data;
};

export const usePostParty = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postParty(req),
        ...configOptions?.options,
        onSuccess: (res) => {},
        onSettled: () => {
            //   console.log("항상 실행");
        },
        onError: (error) => {},
    });

    return info;
};
