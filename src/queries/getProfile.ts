import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { apiClient } from "../libary/reactQueryProvider";
import { ApiResponse, QueryConfigOptions } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getAccessToken, removeAccessToken } from "../utils/localStorage";

// Assuming 'Profile' should be an object, not array
export type Profile = {
    id: number;
    nick: string;
    profImg: string;
    email: string;
    address: string;
    detailAddress: string; // Assuming this should be a string, please change if another type is intended
};

type Response = ApiResponse<Profile>;

const URL_PATH = `myinfo/profile`;

export const QUERY_KEY = [URL_PATH];
const accessToken = getAccessToken();

export const getProfile = async (config?: AxiosRequestConfig) => {
    const res = await apiClient.get<Request, AxiosResponse<Response>>(
        URL_PATH,
        {
            ...config,
            params: {
                ...config?.params,
            },
        }
    );
    return res.data;
};

export const useGetProfile = (configOptions?: QueryConfigOptions) => {
    const info = useQuery<Response, AxiosError, Profile>({
        queryKey: QUERY_KEY,
        queryFn: () => getProfile(configOptions?.config),
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
