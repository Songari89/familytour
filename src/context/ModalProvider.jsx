import React, { createContext, useContext, useEffect, useState } from 'react';
import IdProvider from "./IdProvider";

export const ModalContext = createContext();

export default function ModalProvider({children}) {
  const [imageDelete, setImageDelete] = useState(false);
  const [imageId, setImageId] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);

  const openModal = ({image, imageId}) => {
    setIsOpen(true);
    setImage(image);
    setImageId(imageId)
  }

  const closeModal = () => {
    setIsOpen(false);
    setImageId(null)
    setImage(null);
  }


  const modalValues ={
    isOpen, image, imageDelete, imageId, setImageDelete,openModal,closeModal
  }
  return (
    <ModalContext.Provider value={modalValues}>
      {children}
    </ModalContext.Provider>
  );
}

