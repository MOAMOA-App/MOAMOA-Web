import React from "react";
import Header from "../../components/header/Header";
import style from "./home.module.css";

import HomeCategory from "../../components/homeCategory/HomeCategory"
import HomeListPopular from "../../components/homeList/HomeListPopular"
import HomeListDeadLine from "../../components/homeList/HomeListDeadline";
import HomeListLatest from "../../components/homeList/HomeListLatest";

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
