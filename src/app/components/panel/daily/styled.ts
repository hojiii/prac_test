import styled from "styled-components";

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

    &:not(:first-child) {
      margin-left: 1.875em;
    }

    span {
      font-weight: bold;
      font-size: 1.5em;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
