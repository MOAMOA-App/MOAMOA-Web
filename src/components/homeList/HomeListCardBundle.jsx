import React, { useEffect, useState, useRef } from 'react'
import style from "./homeList.module.css";
import ProductCard from '../product/ProductCard';

export default function HomeListCardBundle() {

    // 반복문 돌려줌
    const productList = (num) => {
        const result = [];
    
        for (let i = 0; i < num; i++) {
            result.push(<p key={i}>{<ProductCard />}</p>);
        }
    
        return result;
    };
        
    //Click and Drag to Scroll
    const slider = document.querySelector('.homeWebPopCont');
    let isDown = false;
    let startX;
    let scrollLeft;

    return (
        <div className={style.homeWebPopCont}>
            {productList(5)}
        </div>
        
    )
}
