import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main
      style={{
        height: "100vh",
        maxWidth: "390px",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#fff"
      }}
    >
      <Outlet />
    </main>
  )
}

export default Layout