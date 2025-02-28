"use client";
import React, { FC } from "react";
import CarouselList from "./components/carousel/CarouselList";
import PanelList from "./components/panel/PanelList";
const Page: FC = () => {
  return (
    <>
      <CarouselList />
      <PanelList />
    </>
  );
};

export default Page;
