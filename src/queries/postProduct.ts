import { apiClient } from "../libary/reactQueryProvider";
import { MutationConfigOptions } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { Goods } from './../types/goods.types';

export interface Request {
    category: string;
    sellingArea: string; //판매위치
    detailArea: string; //판매위치 상세
    title: string;
    sellPrice: number;
    description: string;
    finishedAt: string;
    maxCount: number;
    choiceSend: string; //전달 방법
    status: string;
}


type Response = Goods;
const URL_PATH = `product`;
const MUTATION_KEY = [URL_PATH];

export const postProduct = async (req: Request) => {
    const res = await apiClient.post<Request, AxiosResponse<Response>>(
        URL_PATH,
        req
    );

    return res.data;
};

export const usePostProduct = (configOptions?: MutationConfigOptions) => {
    const info = useMutation<Response, void, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postProduct(req),
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
