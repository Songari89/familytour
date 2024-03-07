import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [isPassword, setIsPassword] = useState(false);
  const [data, setData] = useState({});
  const [isConfirm, setIsConfirm] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const openModal = (image ) => {
    setIsOpen(true);
    setImage(image);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImage(null);
  };

  const openPasswordModal = () => {
    setIsPassword(true)
    
  }
  const closePasswordModal = () => {
    setIsPassword(false)
    setData(null)
  }

  const openConfirmModal = () => {
    setIsConfirm(true)
  }

  const closeConfirmModal = () => {
    setIsConfirm(false)
    setData(null)
  }

  const openSelectedModal = () => {
    setIsSelected(true)
  }

  const closeSelectedModal = () => {
    setIsSelected(false)
  }



  const modalValues = {
    isOpen,
    image,
    openModal,
    closeModal,
    isPassword,
    data,
    openPasswordModal, closePasswordModal,
    isConfirm, openConfirmModal, closeConfirmModal,
    isSelected, openSelectedModal, closeSelectedModal, setData
  };


  return (
    <ModalContext.Provider value={modalValues}>
      {children}
    </ModalContext.Provider>
  );
}
