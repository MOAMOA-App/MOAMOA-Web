import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "../libary/reactQueryProvider";
import { useQuery } from "@tanstack/react-query";
interface ProductImage {
    fileName: string;
    fileSize: number;
    contentType: string;
    uploadTimeStamp: string; // 혹은 Date 타입으로 정의할 수도 있지만, 변환을 위한 추가 작업이 필요합니다.
    fileRoot: null | string; // fileRoot가 null일 수도 있고, string일 수도 있습니다.
}

type Product = {
    id: number;
    user: {
        id: number;
        nick: string;
        profImg: string | null;
        email: string;
        address: string | null;
        detailAddress: string | null;
    };
    category: string;
    sellingArea: string;
    detailArea: string;
    title: string;
    status: string;
    sellPrice: number;
    viewCount: number;
    description: string;
    sellCount: number;
    maxCount: number;
    choiceSend: string;
    createdAt: string;
    finishedAt: string;
    productImages?: ProductImage[];
    // longtitue: string;
    // lattitue: string;
};
type Response = any;
//수정하기!

const URL_PATH = `api/product`;

export const QUERY_KEY = [URL_PATH];

export const getProductSearch = async (id: string) => {
    const res = await apiClient.get<Product, AxiosResponse<Response>>(
        `${URL_PATH}?${id}`
    );
    return res.data;
};

export const useGetProductSearch = (id: string) => {
    const info = useQuery<Response, AxiosError>({
        queryKey: [...QUERY_KEY, id], // 쿼리 키에 상품 ID 추가
        queryFn: () => getProductSearch(id),
        onError: (error: AxiosError) => {},
    });

    return info;
};
