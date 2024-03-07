import React, { useContext } from "react";
import styles from "./Modal.module.css";
import { ModalContext } from "../context/ModalProvider";

export default function Modal() {
  const { isOpen, image:imageurl, closeModal} = useContext(ModalContext);

  return(
  <>
    {isOpen && (
      <div className={styles.container} onClick={closeModal}>
        <div className={styles.imagecontainer}>
          <img
            className={styles.image}
            src={imageurl}
            alt="modalimage"
          />
        </div>
      </div>
    )}
  </>);
}
