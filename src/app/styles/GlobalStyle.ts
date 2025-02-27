"use client";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { ScrollBar } from "./Util";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    overflow-x: hidden;
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    height: 100%;
    ${ScrollBar};
  }

  a {
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
  }


  button {
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
