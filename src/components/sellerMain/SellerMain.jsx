import React from 'react'
import { Outlet } from 'react-router-dom'

export const SellerMain = (props) => {
    return (
        <div
            style={{
                flex : "auto",
                marginBottom : "15px",
                padding : "20px",
                border : "1px solid lightgray"
            }}
        >
            <Outlet/>
        </div>
    )   
}
