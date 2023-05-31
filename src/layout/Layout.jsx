import React from 'react'
import  Header  from '../components/Header';
import  Footer  from '../components/Footer';
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';


export default function Layout({children}) {
    return (
        <Wrap>
            <Header/>
                <Outlet />
            <Footer/>
        </Wrap>
    )
}

export const Wrap = styled.div`
    /* padding: 0 110px; */

`;