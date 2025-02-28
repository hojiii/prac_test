"use client";
import React, { FC } from "react";
import DailyTitle from "./DailyTitle";
import DailyWeekBox from "./DailyWeekBox";
import { DailyPanelContainer } from "./styled";
import { DailyItem } from "./types/types";
import DailyList from "./DailyList";

const DailyPanel: FC = () => {
  const [dailyAllList, setDailyAllList] = React.useState<DailyItem[]>([]);
  const [selectedButton, setSelectedButton] = React.useState<string>("");
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dailyListRoute");
        const data = await response.json();
        console.log("<hojji>  data  ===>>>   ", data);
        setDailyAllList(data);
      } catch (error) {
        console.error("Failed to fetch daily data:", error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    console.log("<hojji>    dailyAllList  ===>>>   ", dailyAllList);
    console.log("<hojji>    selectedButton  ===>>>   ", selectedButton);
  }, [dailyAllList, selectedButton]);

  const dailyList = dailyAllList.filter(
    (item) => item.distributed_air_time === selectedButton
  );

  const onChangeButton = (day: string) => {
    setSelectedButton(day);
  };

  return (
    <>
      <DailyPanelContainer>
        <DailyTitle />
        <DailyWeekBox onChangeButton={onChangeButton} />
        <DailyList dailyList={dailyList} />
      </DailyPanelContainer>
    </>
  );
};

export default DailyPanel;
