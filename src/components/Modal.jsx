import React, { useContext } from "react";
import styles from "./Modal.module.css";
import { ModalContext } from "../context/ModalProvider";
import useViewport from "../hooks/useViewport";

export default function Modal() {
  const { isOpen, image:imageurl, closeModal} = useContext(ModalContext);
  const {addressBar} = useViewport();

  return(
  <>
    {isOpen && (
      <div className={styles.container} onClick={closeModal}>
        <div className={styles.imagecontainer} style={{"height": `${addressBar}px`}}>
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
