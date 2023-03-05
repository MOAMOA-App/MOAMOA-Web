import React from 'react'
import style from "./homeList.module.css";
import ProductCard from '../product/ProductCard';

export default function HomeListCardBundle() {

    const productList = (num) => {
        const result = [];
    
        for (let i = 0; i < num; i++) {
            result.push(<p key={i}>{<ProductCard />}</p>);
        }
    
        return result;
    };

    return (
        <div className={style.homeWebPopCont}>
            {productList(5)}
        </div>
        
    )
}
