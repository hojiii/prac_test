import styled from "styled-components";

export const PanelListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4em;
  padding-top: 2.5em;
  padding-bottom: 4rem;
  overflow-x: hidden;
  font-size: 0.82646vw;
  @media (max-width: 1920px) {
    font-size: calc(0.82646vw + 0.1rem);
  }

  @media (max-width: 1416px) {
    font-size: calc(0.97871vw + 0.1rem);
  }

  @media (max-width: 1024px) {
    font-size: calc(1.2vw + 0.1rem);
  }

  @media (max-width: 768px) {
    font-size: calc(1.5vw + 0.1rem);
  }

  @media (max-width: 480px) {
    font-size: calc(2vw + 0.1rem);
  }
`;
