import React from 'react'
import ProductCard from './ProductCard';
import style from "./product.module.css";


//게시글 4개 묶음
export default function ProductBundle() {
    return (
        <>
            <div className={style.productList}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </>
    )

}