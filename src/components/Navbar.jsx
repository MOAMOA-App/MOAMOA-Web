import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/login">로그인</Link>
      </nav>
      <button>로그아웃</button>
    </>
  )
}
