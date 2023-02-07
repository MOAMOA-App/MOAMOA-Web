import React from 'react'
import { SellerMenu } from '../../components/sellerMenu/SellerMenu'
import { SellerMain } from '../../components/sellerMain/SellerMain'
export default function SellerManage() {
  return (
    <>
      <div
        style={{
            minHeight : "700px",
            display : "flex"
        }}
      >
        <SellerMenu/>
        <SellerMain/>
    </div>
    </>
  )

}
