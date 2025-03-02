"use client";
import React, { FC } from "react";
import * as S from "./Styled";
import { NavLeftList } from "../navLeft/NavLeft";

const Header: FC = () => {
  return (
    <S.Header>
      <S.Nav>
        <NavLeftList />
        {/* <NavRightList isScroll={false} /> */}
      </S.Nav>
    </S.Header>
  );
};

export default Header;
