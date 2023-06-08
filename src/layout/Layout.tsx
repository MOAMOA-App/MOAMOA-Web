import React from 'react'
import  Header  from '../components/Header.tsx';
import  Footer  from '../components/Footer.tsx';
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';


export default function Layout({children}) {
    return (
        <Wrap>
            {/* <Header/> */}
                <Outlet />
            <Footer/>
        </Wrap>
    )
}

export const Wrap = styled.div`
    /* padding: 0 110px; */

`;