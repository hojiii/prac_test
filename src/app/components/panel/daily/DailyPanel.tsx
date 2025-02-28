"use client";
import React, { FC } from "react";
import DailyTitle from "./DailyTitle";
import DailyWeekBox from "./DailyWeekBox";
import { DailyPanelContainer } from "./styled";

interface Props {}

const DailyPanel: FC<Props> = () => {
  return (
    <>
      <DailyPanelContainer>
        <DailyTitle />
        <DailyWeekBox />
      </DailyPanelContainer>
    </>
  );
};

export default DailyPanel;
