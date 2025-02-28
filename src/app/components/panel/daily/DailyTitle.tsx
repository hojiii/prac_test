"use client";
import React, { FC } from "react";
import {
  DailyPanelContainer,
  DailyPanelTitleBox,
  DailyPanelTitle,
} from "./styled";
interface Props {}

const DailyTitle: FC<Props> = () => {
  return (
    <>
      <DailyPanelTitle>
        <span>요일별 신작</span>
        <DailyPanelTitle className="UploadButton">
          <button>업로드 공지</button>
        </DailyPanelTitle>
      </DailyPanelTitle>
    </>
  );
};

export default DailyTitle;
