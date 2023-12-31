import { apiClient } from "../libary/reactQueryProvider";
import { ApiError, ApiResponse, MutationConfigOptions } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

interface Request {
    pid: number;
    lock: boolean;
    contents: string;
}

interface LoginResponse {
    lock: boolean;
    contents: string;
}

type Response = ApiResponse<LoginResponse>;

const URL_PATH = `api/product`;

const MUTATION_KEY = [URL_PATH];

export const postAnnounce = async (data: Request) => {
    const res = await apiClient.post<Request, AxiosResponse<Response>>(
        `${URL_PATH}/${data.pid}/announce`,
        { lock: data.lock, contents: data.contents }
    );

    return res.data;
};
export const usePostAnnounce = (id: string, configOptions?: MutationConfigOptions) => {
    const queryClient = useQueryClient(); // Get the queryClient instance
    const announceListQueryKey = ['announceList', id];

    const info = useMutation<Response, AxiosError<ApiError>, Request, void>({
        mutationKey: MUTATION_KEY,
        mutationFn: (req) => postAnnounce(req),
        ...configOptions?.options,
        onSuccess: (res) => {
            // Invalidate and refetch
            queryClient.invalidateQueries(announceListQueryKey);
        },
        onError: (error) => {
            // Handle error
        },
        onSettled: () => {
            // Optionally refetch queries after mutation
            queryClient.invalidateQueries(announceListQueryKey);
        },
    });

    return info;
};
