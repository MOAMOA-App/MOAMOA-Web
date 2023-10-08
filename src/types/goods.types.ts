interface userType {
    id: number;
    nick: string;
    profImg: null;
    email: string;
    address: null;
    detailAddress: null;
}
interface announceType {
    id: number;
    lock: boolean;
    contents: string;
    createdAt: string;
}

export interface Goods {
    id: number;
    user: userType;
    categoryId: string;
    sellingArea: string;
    detailArea: string;
    title: string;
    status: string;
    sellPrice: number;
    description: string;
    finishedAt: string;
    maxCount: number;
    choiceSend: string;
    viewCount: number;
    createdAt: string;
    updatedAt: string;
    sellCount: number;
    announces: announceType[];
}
