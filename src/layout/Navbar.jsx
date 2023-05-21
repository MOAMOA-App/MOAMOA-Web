import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

function Navbar() {
    const { setAuth } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        localStorage.removeItem('name');
        setAuth(localStorage.getItem('name'));
    }

    return (
        <>
        <nav>
            <Link to="/">홈</Link>
            <Link to="/chat">채팅</Link>
            <Link to="/write">게시글 작성</Link>
            <Link to="/profile">프로피</Link>
        </nav>
        <button onClick={handleClick}>로그아웃</button>
        </>
    )
}

export default Navbar