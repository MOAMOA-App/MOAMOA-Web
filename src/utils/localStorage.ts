const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const USER_INFO = "userInfo";

interface User {
    id: number;
    detailAddress: null | string;
    email: string;
    nick: string;
    profImg: null | string;
}

export const setLocalStorage = (key: string, value: any) => {
    if (typeof window !== "undefined") {
        const storage = window.localStorage;
        if (!storage) {
            return;
        }

        try {
            const stringifiedValue = JSON.stringify(value);
            storage.setItem(key, stringifiedValue);
        } catch (e) {
            console.error(`failed to stringify`, e);
        }
    }
};
export const getLocalStorage = (key: string, defaultValue = null) => {
    if (typeof window !== "undefined") {
        const storage = window.localStorage;
        if (!storage) {
            return defaultValue;
        }

        try {
            const value = storage.getItem(key);
            return value ? JSON.parse(value) : defaultValue;
        } catch (e) {
            console.error(`failed to parse`, e);
            return defaultValue;
        }
    }
};

export const removeLocalStorageItem = (key: string) => {
    if (typeof window !== "undefined") {
        const storage = window.localStorage;
        if (!storage) {
            return;
        }
        storage.removeItem(key);
    }
};

export const setAccessToken = (acessToken: string) => {
    setLocalStorage(ACCESS_TOKEN, acessToken);
};

export const setRefreshToken = (refreshToken: string) => {
    setLocalStorage(REFRESH_TOKEN, refreshToken);
};

export const setUserInfo = (userInfo: User) => {
    setLocalStorage(USER_INFO, userInfo);
};

export const getAccessToken = () => getLocalStorage(ACCESS_TOKEN);
export const getRefreshToken = () => getLocalStorage(REFRESH_TOKEN);
export const getUserInfo = () => getLocalStorage(USER_INFO);

export const removeAccessToken = () => {
    removeLocalStorageItem(ACCESS_TOKEN);
};
