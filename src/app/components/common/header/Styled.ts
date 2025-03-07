import styled from "styled-components";

// const HeaderScroll = css`
//   background-color: ${({ theme: { colors } }) => colors.white};
//   box-shadow: 0 1px 0 0 ${({ theme: { colors } }) => colors.cream};

//   & a {
//     color: ${({ theme: { colors } }) => colors.black};
//   }
// `;

// const HeaderNotScroll = css`
//   background-color: transparent;

//   & a {
//     color: ${({ theme: { colors } }) => colors.white};
//   }
// `;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
  font-size: 3rem;
  transition: all 0.3s linear;
  a {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const Nav = styled.nav`
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
