import styled, { css } from "styled-components";

const LoginSize = css`
  width: 200px !important; // 직접 크기 지정
  height: auto !important;
  min-height: 10rem !important;
`;

const AuthSize = css`
  width: 150px !important; // 직접 크기 지정
  height: auto !important;
  min-height: 6rem !important;
`;

export const Svg = styled.svg<{ login: boolean; auth: boolean }>`
  ${({ login }) => login && LoginSize}
  ${({ auth }) => auth && AuthSize}
  width: 150px !important; // 기본 크기 설정
  height: auto !important;
`;
