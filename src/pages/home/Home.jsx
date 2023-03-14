import React from "react";
import { useMediaQuery } from 'react-responsive'

import HomeCategory from "../../components/homeCategory/HomeCategory"
import HomeCategoryTab from "../../components/homeCategory/HomeCategoryTab";
import HomeCategoryMob from "../../components/homeCategory/HomeCategoryMob";

import HomeList from "../../components/homeList/HomeList";
import HomeListMob from "../../components/homeList/HomeListMob";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 520 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 346, maxWidth: 520 })
    return isMobile ? children : null
}
const Mobile = ({ children }) => {
    const isNotMobile = useMediaQuery({ 
        // minWidth: 280, 
        maxWidth: 346 })
    return isNotMobile ? children : null
}

export default function Home() {
    return (
        <> 
            <Desktop>
                <HomeCategory/>
                <HomeList />
            </Desktop>

            <Tablet>
                <HomeCategoryTab />
                <HomeListMob />
            </Tablet>

            <Mobile>
                <HomeCategoryMob/>
                <HomeListMob />
            </Mobile>
        </>
    );
}
