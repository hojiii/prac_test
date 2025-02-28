"use client";
import React, { FC } from "react";
import {
  DailyImg,
  DailyItemBox,
  DailyItemContainer,
  DailyItemImg,
  DailyItemImgBox,
  DatilListContainer,
  TitleBox,
} from "./styled";
import { DailyItem } from "./types/types";
import Link from "next/link";
import Image from "next/image";

interface DailyListProps {
  dailyList: DailyItem[];
}

const DailyList: FC<DailyListProps> = ({ dailyList }) => {
  React.useEffect(() => {
    console.log(dailyList);
  }, [dailyList]);

  return (
    <DatilListContainer>
      <DailyItemContainer>
        {dailyList.map((item) => {
          // 좌표 데이터 파싱
          const [x, y, width, height] = item.cropped_img.split(",").map(Number);

          // 크롭된 이미지 비율 계산
          const aspectRatio = (width - x) / (height - y);

          return (
            <DailyItemBox key={item.id}>
              <div>
                <Link id={item.name} href="/">
                  <DailyItemImgBox>
                    <DailyItemImg aspectRatio={aspectRatio}>
                      <DailyImg>
                        <Image
                          src={item.images[0].img_url}
                          alt={item.name}
                          width={width}
                          height={height}
                          style={{
                            objectFit: "cover",
                            transform: `translate(${-x}px, ${-y}px)`,
                          }}
                        />
                      </DailyImg>
                    </DailyItemImg>
                    <TitleBox>
                      <p>{item.name}</p>
                    </TitleBox>
                  </DailyItemImgBox>
                </Link>
              </div>
            </DailyItemBox>
          );
        })}
      </DailyItemContainer>
    </DatilListContainer>
  );
};

export default DailyList;
