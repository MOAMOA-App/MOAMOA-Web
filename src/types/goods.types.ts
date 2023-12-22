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
interface ImageType {
    fileName: string;
    fileSize: number;
    contentType: string;
    uploadTimeStamp: string;
    fileRoot: null;
}

export interface Goods {
    id: number;
    user: userType;
    mainImage?: string;
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
    // updatedAt: string;
    productImages?: ImageType[];
    announces?: announceType[];
    heart?: boolean;

}

export interface Goods2 {
    address: string;
    buyer: userType;
    product: Goods;
    count: number;
    createdAt: string;
    id: number;
}

// export interface Goods {
//     id: number;
//     user: userType;
//     category: string;
//     sellingArea: string;
//     detailArea: string;
//     title: string;
//     status: string;
//     sellPrice: number;
//     viewCount: number;
//     description: string;
//     sellCount: number;
//     maxCount: number;
//     choiceSend: string;
//     createdAt: string;
//     finishedAt: string;
//     productImages: string[];
// }
