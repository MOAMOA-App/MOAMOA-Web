import {
    atom,
    useRecoilValue,
    useRecoilState,
    useSetRecoilState,
} from "recoil";

type numberType = {
    number: string;
};



const numberState = atom<number>({
    key: "numberState",
    //     default: {
    //         전체: false,
    //         관심: false,
    //         생활: false,
    //         의류: false,
    //         식품: false,
    //         가전: false,
    //         취미: false,
    //         운동: false,
    //         굿즈: false,
    //         동물: false,
    //         해외: false,
    //         기타: false,
    //     },
    default: 0,
});

export const useNumberState = () => useRecoilState(numberState);
export const useNumberValue = () => useRecoilValue(numberState);
export const useNumberWrite = () => useSetRecoilState(numberState);
