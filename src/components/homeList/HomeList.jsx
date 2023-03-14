import React, { Component } from "react";
import Slider from "react-slick";
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
            <div className={style.homeWebListCont}>
                <DeadLine />
                <div className={style.homeWebPopCont}>
                    {productList(5)}
                </div>
            </div>

            <div className={style.homeWebListCont}>
                <Popular />
                <div className={style.homeWebPopCont}>
                    {productList(5)}
                </div>
            </div>

            <div className={style.homeWebListCont}>
                <Latest />
                <div className={style.homeWebPopCont}>
                    {productList(5)}
                </div>
            </div>
        </>
    )
}
