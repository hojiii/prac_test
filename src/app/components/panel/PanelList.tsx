"use client";
import React, { FC } from "react";
import { PanelListContainer } from "./styled";
import DailyPanel from "./daily/DailyPanel";
interface Props {}

const PanelList: FC<Props> = () => {
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
