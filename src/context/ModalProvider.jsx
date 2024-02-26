import React, { createContext, useContext, useEffect, useState } from 'react';
import IdProvider from "./IdProvider";

export const ModalContext = createContext();

export default function ModalProvider({children}) {

  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);

  const openModal = (image) => {
    setIsOpen(true);
    setImage(image);
  }

  const closeModal = () => {
    setIsOpen(false);
    setImage(null);
  }


  const modalValues ={
    isOpen, image, openModal,closeModal
  }
  return (
    <ModalContext.Provider value={modalValues}>
      {children}
    </ModalContext.Provider>
  );
}

