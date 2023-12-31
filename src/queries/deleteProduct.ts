import { apiClient } from "../libary/reactQueryProvider";
import { MutationConfigOptions } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export interface Request {
    pid: number;
}

type Response = any;
const URL_PATH = `product`;
const MUTATION_KEY = [URL_PATH];

export const deleteProduct = async (req: Request) => {
    // Use the URL to specify the product ID
    const res = await apiClient.delete<AxiosResponse<Response>>(
        `${URL_PATH}/${req}`
    );

    return res.data;
};

export const useDeleteProduct = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, void, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => deleteProduct(req),
        ...configOptions?.options,
        onSuccess: () => {
            // console.log("성공 시 실행")
        },
        onSettled: () => {
            //   console.log("항상 실행");
        },
        onError: (error) => {},
    });

    return info;
};
