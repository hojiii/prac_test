import styled from "styled-components";

export const NavList = styled.ul<{ isScroll: boolean }>`
  padding-left: 5rem;
  gap: 2.4rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  li {
    a {
      &:hover {
        color: ${({ isScroll, theme }) =>
          isScroll ? theme.colors.gray : theme.colors.hoverPurPle};
      }
    }
  }
`;
