import React from 'react'
import style from "./homeList.module.css";
import { useMediaQuery } from 'react-responsive'

import ProductCard from '../product/ProductCard';

import Popular from "./HomeListPopular"
import DeadLine from "./HomeListDeadline"
import Latest from "./HomeListLatest"

export default function HomeList() {

    // 반복문 돌려줌
    const productList = (num) => {
        const result = [];
    
        for (let i = 0; i < num; i++) {
            result.push(<p key={i}>{<ProductCard />}</p>);
        }
    
        return result;
    };

    return (
        <>
            <div className={style.homeMobListCont}>
                <DeadLine />
                <div className={style.homeMobPopCont}>
                    {productList(6)}
                </div>
            </div>

            <div className={style.homeMobListCont}>
                <Popular />
                <div className={style.homeMobPopCont}>
                    {productList(6)}
                </div>
            </div>

            <div className={style.homeMobListCont}>
                <Latest />
                <div className={style.homeMobPopCont}>
                    {productList(6)}
                </div>
            </div>
        </>
    )
}