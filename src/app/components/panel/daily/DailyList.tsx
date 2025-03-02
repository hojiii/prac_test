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
import { useRouter } from "next/navigation";

interface DailyListProps {
  dailyList: DailyItem[];
}

const DailyList: FC<DailyListProps> = ({ dailyList }) => {
  const router = useRouter();

  const handleItemClick = (item: DailyItem) => {
    router.push(`/detailModal?modal=${item.id}`, {
      scroll: false,
    });
  };

  React.useEffect(() => {
    console.log(dailyList);
  }, [dailyList]);

  return (
    <DatilListContainer>
      <DailyItemContainer>
        {dailyList.map((item) => {
          // 좌표 데이터 파싱
          const [x, y, width, height] = item.cropped_img.split(",").map(Number);

          return (
            <DailyItemBox key={item.id}>
              <div onClick={() => handleItemClick(item)}>
                <Link
                  id={item.name}
                  href={`/?modal=${item.id}`}
                  scroll={false} // 페이지 스크롤 방지
                >
                  <DailyItemImgBox>
                    <DailyItemImg>
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
