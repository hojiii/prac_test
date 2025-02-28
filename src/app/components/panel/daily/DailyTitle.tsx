"use client";
import React, { FC } from "react";
import { DailyPanelTitle } from "./styled";

const DailyTitle: FC = () => {
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
