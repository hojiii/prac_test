import styled, { AspectRatioProps } from "styled-components";

export const DailyPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0px 3.125em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
// export const DailyPanelTitleBox = styled.div`
//   padding: 0px 3.125em;
//   font-weight: 700;
//   color: ${({ theme }) => theme.colors.white};
// `;
export const DailyPanelTitle = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  max-width: 75.625em;
  padding-bottom: 1em;
  span {
    font-weight: bold;
    font-size: 1.75em;
    padding-right: 0.075em;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.white};
  }
  .UploadButton {
    margin-left: 1em;
    -webkit-box-align: center;
    align-items: center;
    button {
      color: ${({ theme }) => theme.colors.white};
      position: relative;
      display: inline-flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      height: 2.5em;
      padding: 0px 1em;
      background: ${({ theme }) => theme.colors.black};
      border: 0.0625em solid ${({ theme }) => theme.colors.gray};
      box-sizing: border-box;
      border-radius: 0.25em;
      cursor: pointer;
    }
  }
`;
export const DailyWeekBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 37.5em;
  padding-top: 0.5em;
  padding-bottom: 1.5em;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.75em;
    width: 3.75em;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    transition: background-color 0.2s ease;

    &.active {
      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme }) => theme.colors.white};
    }

    span {
      font-weight: bold;
      font-size: 1.5em;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
export const DatilListContainer = styled.div`
  osition: relative;
  width: 100%;
   
  }
`;
export const DailyItemContainer = styled.ol`
  width: 100%;
  display: flex;
  gap: 0.375em;
  flex-wrap: nowrap;
  min-height: 14em;
  overflow-x: visible;
  transform: translate3d(0em, 0px, 0px);
`;
export const DailyItemBox = styled.li`
  flex: 0 0 18.625em;
  width: 18.625em;
  scroll-snap-align: start;
  position: relative;
  padding-top: 20px;
`;
export const DailyItemImgBox = styled.div`
  display: block;
  position: relative;
  width: 100%;
  &:hover img {
    transform: scale(1.05);
  }
`;
export const DailyItemImg = styled.div<AspectRatioProps>`
  width: 100%;
  z-index: 0;
  overflow: hidden;
  position: relative;
  border-radius: 0.25em;
  padding-bottom: 55.7047%;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio || "auto"};
  div {
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`;
export const DailyImg = styled.picture`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
  opacity: 1;
  padding-right: 0.5rem;
  min-height: 3.375em;
  p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    font-size: 1.125em;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-wrap: break-word;
  }
`;
