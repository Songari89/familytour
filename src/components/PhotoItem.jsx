import React, { useContext } from "react";
import styles from "./PhotoItem.module.css";
import basic from "../staticimage/basic.png";
import totoro from "../staticimage/totoro 2.png";
import pooh from "../staticimage/pooh 2.png";
import { ModalContext } from "../context/ModalProvider";
import html2canvas from 'html2canvas';

const filmImage = {
  basic,
  totoro,
  pooh,
};
const date = {
  "10May": "2024년 5월 10일",
  "11May": "2024년 5월 11일",
  "12May": "2024년 5월 12일",
};

export default function PhotoItem({ photo, film, file, mode }) {
  const {openModal} = useContext(ModalContext);
  const filmScr = mode === "sample" ? filmImage[film] : filmImage[photo.film];
  const imageScr = mode === "sample" ? URL.createObjectURL(file) : photo.image;
  const ShowContents = mode === "selected" && photo;
  const handleCapture = () => {
    const element = document.getElementById('capture')
    html2canvas(element,{scale: 4}).then(canvas => {
      const image = canvas.toDataURL();
      console.log(image)
      openModal(image)
    })
  }

  return (
    <div id="capture" className={`${styles.container} ${styles[`${mode}image`]}`} onClick={handleCapture}>
      <img className={styles.film} src={filmScr} alt={film} />
      <div className={`${styles.photocontainer} ${styles[`${mode}photo`]}`}>
        <img className={styles.photo} src={imageScr} alt="photo" />
      </div>
      {ShowContents && (
        <div className={styles.contents}>
          <p>{date[photo.when]}</p>
          <p>{photo.where}</p>
          <pre>{photo.what}</pre>
        </div>
      )}
    </div>
  );
}
