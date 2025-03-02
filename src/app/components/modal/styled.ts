import styled from "styled-components";

export const ModalWrapContainer = styled.dialog`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  width: 90vw;
  height: 90vh;
  margin: auto;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  &[open] {
    display: flex;
  }
`;
