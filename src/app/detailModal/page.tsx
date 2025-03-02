"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { ModalWrapContainer } from "../components/modal/styled";
import { useRef, useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const modalId = searchParams.get("modal");
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (ref.current) {
      setShowModal(true);
      ref.current.showModal();
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    router.back();
  };

  return (
    <ModalWrapContainer open={showModal} onClick={handleClose} ref={ref}>
      <div>
        <h1>{modalId}</h1>
      </div>
    </ModalWrapContainer>
  );
};

export default Page;
