import {
    MutationObserverOptions,
    QueryObserverOptions,
} from "@tanstack/react-query";

import { AxiosRequestConfig } from "axios";

export interface MutationConfigOptions {
    config?: AxiosRequestConfig;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: Omit<MutationObserverOptions<any, any, any, any>, `initialData`>;
}
export interface User {
    id: number;
    detailAddress: null | string;
    email: string;
    nick: string;
    profImg: null | string;
}

export interface QueryConfigOptions {
    config?: AxiosRequestConfig;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: Omit<QueryObserverOptions<any, any, any, any>, `initialData`>;
}

export interface ApiResponse<T> {
    user: User;
    refreshToken: any;
    accessToken: any;
    code: string;
    message: string;
    data: T;
    token: string;
    msg: string;

}

export interface ApiError {
    code: number;
    message: string;
}
