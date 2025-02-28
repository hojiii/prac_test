"use client";
import React, { FC } from "react";
import { PanelListContainer } from "./styled";
import DailyPanel from "./daily/DailyPanel";

const PanelList: FC = () => {
  return (
    <>
      <PanelListContainer>
        <div>
          <DailyPanel />
        </div>
      </PanelListContainer>
    </>
  );
};

export default PanelList;
