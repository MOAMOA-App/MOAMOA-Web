import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiClient } from "../libary/reactQueryProvider";
import { ApiResponse, QueryConfigOptions } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken, removeAccessToken } from "../utils/localStorage";
import { Goods, Goods2 } from "../types/goods.types";

type Product = {
    id: number;
    buyer: {
        id: number;
        nick: string;
        profImg: string | null;
        email: string;
        address: string | null;
        detailAddress: string | null;
    };
    address: string;
    createdAt: number;
    count: number;
};
type Response = any;
//수정하기!

const URL_PATH = `product`;

export const QUERY_KEY = [URL_PATH];
const accessToken = getAccessToken();


export const getJoinList = async (id: string, config?: AxiosRequestConfig) => {
    const res = await apiClient.get<Product[], AxiosResponse<Response>>(
        `${URL_PATH}/${id}/party`,
        {
            ...config,
            params: {
                ...config?.params,
            },
        }
    );
    return res.data;
};



export const useGetJoinList = (id: string, configOptions?: QueryConfigOptions) => {
    const info = useQuery<Response, AxiosError, Product[]>({
        queryKey: [...QUERY_KEY, id],
        queryFn: () => getJoinList(id, configOptions?.config),
        ...configOptions?.options,
        // select: (res) => res.data,
        enabled: !!accessToken, // uncomment this if you want the query to run only when accessToken is available

        onError: (error: AxiosError) => {
            // Handle error here. For example:
            if (error.response?.status === 401) {
                removeAccessToken(); // or any other action appropriate for auth failures
            }
            // ... other error handling
        },
    });

    return info;
};
