"use client";
import React, { FC } from "react";
import { DailyWeekBoxContainer } from "./styled";

interface Props {}
const initButton = [
  { id: 1, name: "월" },
  { id: 2, name: "화" },
  { id: 3, name: "수" },
  { id: 4, name: "목" },
  { id: 5, name: "금" },
  { id: 6, name: "토" },
  { id: 0, name: "일" },
];

const DailyWeekBox: FC<Props> = () => {
  const today = new Date().getDay();
  const [selectedButton, setSelectedButton] = React.useState<number>(today);

  return (
    <DailyWeekBoxContainer>
      {initButton.map((button) => (
        <button
          key={button.id}
          onClick={() => setSelectedButton(button.id)}
          className={selectedButton === button.id ? "active" : ""}
        >
          <span>{button.name}</span>
        </button>
      ))}
    </DailyWeekBoxContainer>
  );
};

export default DailyWeekBox;
