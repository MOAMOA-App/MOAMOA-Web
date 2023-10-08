import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "../styles/Layout.styled";

export default function Layout() {
    return (
        <S.Main>
            <Outlet />
        </S.Main>
    );
}
