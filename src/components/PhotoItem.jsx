import React, { useEffect, useState } from 'react';
import styles from './PhotoItem.module.css'
import basic from "../staticimage/basic.png";
import totoro from "../staticimage/totoro 2.png";
import pooh from "../staticimage/pooh 2.png";


const filmImage = {
  basic,
  totoro,
  pooh,
};
const date = {
  "10May" : "2024년 5월 10일",
  "11May" : "2024년 5월 11일",
  "12May" : "2024년 5월 12일",
}

export default function PhotoItem({photo, film, file, mode}) {
  
  return (
    <div className={styles.image}>
      {mode === "sample" && film && (
        <img className={styles.film} src={filmImage[film]} alt={film} />
      )}
      {mode === "photo" && photo && (
        <img className={styles.film} src={filmImage[photo.film]} alt={film} />
      )}
      <div className={styles.photocontainer}>
        {file && (
          <img
            className={styles.photo}
            src={URL.createObjectURL(file)}
            alt="photo"
          />
        )}
      </div>
    </div>
  );
}

