import React, { createContext, useState } from "react";
import IdProvider from "./IdProvider";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [isPassword, setIsPassword] = useState(false);
  const [data, setData] = useState({});
  const [isConfirm, setIsConfirm] = useState(false);

  const openModal = (image ) => {
    setIsOpen(true);
    setImage(image);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImage(null);
  };

  const openPasswordModal = ({data}) => {
    setIsPassword(true)
    setData({data})
  }
  const closePasswordModal = () => {
    setIsPassword(false)
    setData(null)
  }

  const openConfirmModal = ({photo}) => {
    setIsConfirm(true)
    setData({photo})
  }

  const closeConfirmModal = () => {
    setIsConfirm(false)
    setImage(null);
  }


  const modalValues = {
    isOpen,
    image,
    openModal,
    closeModal,
    isPassword,
    data,
    openPasswordModal, closePasswordModal,
    isConfirm, openConfirmModal, closeConfirmModal
  };


  return (
    <ModalContext.Provider value={modalValues}>
      {children}
    </ModalContext.Provider>
  );
}
