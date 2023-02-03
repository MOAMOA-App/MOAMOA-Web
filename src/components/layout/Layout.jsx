import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main
      style={{
        height: "100vh",
        maxWidth: "1130px",
        margin:"0 auto",
        position: "relative",
        backgroundColor: "#fff"
      }}
    >
      <Outlet />
    </main>
  )
}

export default Layout