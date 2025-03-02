"use client";
import React, { FC } from "react";
import { DailyWeekBoxContainer } from "./styled";

interface DailyWeekBoxProps {
  onChangeButton: (day: string) => void;
}

const initButton = [
  { id: 1, name: "월", fullName: "월요일" },
  { id: 2, name: "화", fullName: "화요일" },
  { id: 3, name: "수", fullName: "수요일" },
  { id: 4, name: "목", fullName: "목요일" },
  { id: 5, name: "금", fullName: "금요일" },
  { id: 6, name: "토", fullName: "토요일" },
  { id: 0, name: "일", fullName: "일요일" },
];

const DailyWeekBox: FC<DailyWeekBoxProps> = ({ onChangeButton }) => {
  const today = new Date().getDay();
  const [selectedButton, setSelectedButton] = React.useState<number>(today);

  const onClickButton = (day: string, dayId: number) => {
    onChangeButton(day);
    setSelectedButton(dayId);
  };
  React.useEffect(() => {
    if (selectedButton === 0) {
      onChangeButton(initButton[6].fullName);
    } else {
      onChangeButton(initButton[selectedButton - 1].fullName);
    }
  }, []);

  return (
    <>
      <DailyWeekBoxContainer>
        {initButton.map((button) => (
          <button
            key={button.id}
            onClick={() => onClickButton(button.fullName, button.id)}
            className={selectedButton === button.id ? "active" : ""}
          >
            <span>{button.name}</span>
          </button>
        ))}
      </DailyWeekBoxContainer>
    </>
  );
};

export default DailyWeekBox;
