"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { popModal } from "@/app/stores/modal";
import { ModalWrapContainer } from "./styled";

interface IProps {
  children: React.ReactNode;
  dimLock?: boolean;
}

const ModalWrapper = ({ children, dimLock = false }: IProps) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const ref = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      setShowModal(true);
      ref.current.showModal();
    }

    document.addEventListener("keydown", clickDialog);
    return () => {
      document.removeEventListener("keydown", clickDialog);
    };
  }, [ref]);

  const clickDialog = (e: any) => {
    if (
      e.target === ref.current &&
      e.target.contains(e.target.firstElementChild)
    ) {
      if (dimLock) return;
      if (e.target?.classList.contains("no_close")) return;

      setShowModal(false);
      dispatch(popModal());
      document.body.removeAttribute("style");
    }
    // esc 키 누르면 dim만 사라짐 대응
    else if (e.key === "Escape" && ref.current && ref.current.open) {
      setShowModal(false);
      dispatch(popModal());
    }
  };

  return (
    <ModalWrapContainer
      open={showModal}
      onClick={(e) => clickDialog(e)}
      ref={ref}
    >
      <div>{children}</div>
    </ModalWrapContainer>
  );
};

export default ModalWrapper;
