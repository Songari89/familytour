import React, { useContext } from "react";
import styles from "./PhotoDetail.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPhoto} from "../apis/firebase";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { ModalContext } from "../context/ModalProvider";
import trash from "../staticimage/trashred.svg";

export default function PhotoDetail({ date }) {
  const { openModal, openConfirmModal, setData } = useContext(ModalContext);

  const {
    isLoading,
    error,
    data: photos,
  } = useQuery({
    queryKey: ["photos", date],
    queryFn: () => getPhoto(date),
    enabled: !!date,
  });


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
