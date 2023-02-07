import React from "react";
import Header from "../../components/header/Header";
import style from "./home.module.css";

import HomeCategory from "../../components/homeCategory/HomeCategory"
import HomeListPopular from "../../components/homeListPopular/HomeListPopular"
import HomeListDeadLine from "../../components/homeListDeadline/HomeListDeadline";
import HomeListLatest from "../../components/homeListLatest/HomeListLatest";

export default function Home() {
    return (
        <>           
            <HomeCategory/>
            <HomeListDeadLine/>
            <HomeListPopular/>
            <HomeListLatest/>
        </>
    );
}
