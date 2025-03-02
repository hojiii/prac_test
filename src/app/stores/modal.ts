import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JSX } from "react";

export interface ModalState {
  modalList: {
    modal: JSX.Element;
    classNm?: string;
    size?: string;
    title?: string;
    dimLock?: boolean;
  }[];
}

const initialState: ModalState = {
  modalList: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (
      state,
      action: PayloadAction<{
        component: JSX.Element;
        size: string;
        title?: string;
        dimLock?: boolean;
        classNm?: string;
      }>
    ) => {
      state.modalList.push({
        modal: action.payload.component,
        size: action.payload.size,
        title: action.payload.title,
        dimLock: action.payload.dimLock,
        classNm: action.payload.classNm,
      });
    },
    hideModal: (state) => {
      state.modalList = state.modalList.slice(1);
    },
    popModal: (state) => {
      state.modalList = state.modalList.slice(0, -1);
    },
    clearModal: (state) => {
      state.modalList = [];
    },
  },
});

export const { showModal, hideModal, popModal, clearModal } =
  modalSlice.actions;
export default modalSlice.reducer;
