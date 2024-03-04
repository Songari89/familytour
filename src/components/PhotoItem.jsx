import React, { useContext, useRef } from "react";
import styles from "./PhotoItem.module.css";
import basic from "../staticimage/basic.png";
import totoro from "../staticimage/totoro 2.png";
import pooh from "../staticimage/pooh 2.png";

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

export default function PhotoItem({ photo, file, mode }) {
  const imageStyles = `${styles.imagecontainer} ${styles[`${mode}image`]}`;
  const photoStyles = `${styles.photocontainer} ${styles[`${mode}photo`]}`;
  const contentsStyles = `${styles.contents} ${styles[`${mode}contents`]}`;

  return (
    <>
      {(photo.film || file) && (
        <div className={imageStyles}>
          <img
            className={styles.film}
            src={filmImage[photo.film]}
            alt={photo.film}
          />
          {file && (
            <div className={photoStyles}>
              <img
                className={styles.photo}
                src={URL.createObjectURL(file)}
                alt="photo"
              />
            </div>
          )}
          <div className={contentsStyles}>
            <p className={`${styles[`${mode}text`]}`}>{date[photo.when]}</p>
            <p className={`${styles[`${mode}text`]}`}>{photo.where}</p>
            <pre className={`${styles[`${mode}textarea`]}`}>{photo.what}</pre>
          </div>
        </div>
      )}
    </>
  );
}
