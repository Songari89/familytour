import React, { useEffect, useState } from 'react';
import styles from './PhotoItem.module.css'
import basic from "../staticimage/basic.png";
import totoro from "../staticimage/totoro.png";
import pooh from "../staticimage/pooh.png";


const filmImage = {
  basic,
  totoro,
  pooh,
};

export default function PhotoItem({photo, film, file}) {

  return (
    <div className={styles.image}>
      <img className={styles.film} src={filmImage[film]} alt={film} />

      {file && <img className={styles.photo} src={URL.createObjectURL(file)} alt="photo"  />}
    </div>
  );
}

