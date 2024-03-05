import React, { useContext, useState } from "react";
import styles from "./PhotoDetail.module.css";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { deletePhoto, getPhoto, removePhoto } from "../apis/firebase";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { ModalContext } from "../context/ModalProvider";
import trash from "../staticimage/trashred.svg";


export default function PhotoDetail({ date }) {
  const { openModal, setImageDelete } = useContext(ModalContext);

  const {
    isLoading,
    error,
    data: photos,
  } = useQuery({
    queryKey: ["photos", date],
    queryFn: () => getPhoto(date),
    enabled: !!date,
  });
  const queryClient = useQueryClient();
  const removeItem = useMutation({
    mutationFn: ({ photo }) => removePhoto({ photo }),
    onSuccess: () => queryClient.invalidateQueries(["photos"]),
  });

  
  const handleDelete = (photo) => {
    deletePhoto({id:photo.id})
 removeItem.mutate({ photo })
 
  };



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
              onClick={() => handleDelete(photo)}
            />
            <img
              className={styles.image}
              src={photo.image}
              alt={photo.where}
              onClick={() => {
                openModal({ image: photo.image, imageId: photo.id });
                setImageDelete(true);
              }}
            />
          </li>
        ))}
    </ul>
    </>
  );
}


