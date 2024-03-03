"use client";

import React from "react";

type GameModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function GameModal(props: GameModalProps) {
  // dialog ref
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  // Open close
  React.useEffect(() => {
    if (props.isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [props.isOpen]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
    const boundingBox = dialogRef.current?.getBoundingClientRect();
    if (!boundingBox) return;

    if (
      e.clientX < boundingBox?.left ||
      e.clientX > boundingBox?.right ||
      e.clientY < boundingBox?.top ||
      e.clientY > boundingBox?.bottom
    ) {
      props.onClose();
    }
  };

  // If user clicks outside of modal, close it
  dialogRef.current?.addEventListener("click", (e) => {
    const boundingBox = dialogRef.current?.getBoundingClientRect();

    // assert boundingBox is not null
    if (!boundingBox) return;

    if (
      e.clientX < boundingBox?.left ||
      e.clientX > boundingBox?.right ||
      e.clientY < boundingBox?.top ||
      e.clientY > boundingBox?.bottom
    ) {
      props.onClose();
    }
  });

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClickOutside}
      className={`fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center">
        <div className="fixed inset-0 bg-black opacity-75"></div>
        <div className="bg-white rounded-lg p-8 z-10">{props.children}</div>
      </div>
    </dialog>
  );
}
