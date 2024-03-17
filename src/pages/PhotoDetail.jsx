import React, { useContext } from "react";
import styles from "./PhotoDetail.module.css";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { ModalContext } from "../context/ModalProvider";
import trash from "../staticimage/trashred.svg";
import usePhoto from "../hooks/usePhoto";

export default function PhotoDetail({ date }) {
  const { openModal, openConfirmModal, setData } = useContext(ModalContext);

  const { photoQuery:{
    isLoading,
    error,
    data: photos,}
  } = usePhoto(date)


  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }



  return (
    <>
      <ul className={styles.lists}>
        {photos &&
          photos.map((photo) => (
            <li key={photo.id} className={styles.list}>
              <img
                className={styles.trash}
                src={trash}
                alt="trash"
                onClick={() => {
                  openConfirmModal();
                  setData(photo);
                }}
              />
              <img
                className={styles.image}
                src={photo.image}
                alt={photo.where}
                onClick={() => openModal(photo.image)}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
