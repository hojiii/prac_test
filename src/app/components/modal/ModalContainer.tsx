"use client";
import React, { FC, JSX } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/stores/store";
import ModalWrapper from "./ModalWrapper";

interface ModalItem {
  modal: JSX.Element;
  classNm?: string;
  size?: string;
  title?: string;
  dimLock?: boolean;
}

const ModalContainer: FC = () => {
  const { modalList } = useSelector((state: RootState) => state.modal);

  return (
    <>
      {modalList.map((item: ModalItem, index: number) => (
        <ModalWrapper key={index}>{item.modal}</ModalWrapper>
      ))}
    </>
  );
};

export default ModalContainer;
