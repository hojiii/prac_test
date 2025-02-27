"use client";
import React, { FC } from "react";
import Header from "./components/common/header/Header";
import CarouselList from "./components/carousel/CarouselList";

const Page: FC = () => {
  return (
    <>
      <Header />
      <CarouselList />
    </>
  );
};

export default Page;
