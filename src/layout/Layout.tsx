import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./../style/Layout.styled";

export default function Layout() {
  return (
    <S.Main>
      <Outlet />
    </S.Main>
  );
}
