import React from "react";
import styles from "./PlaceItem.module.css";
import Like from "./Like";

export default function PlaceItem({ list }) {
  const {title, address, addressurl, image, pay, time, description} = list;
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
      <img className={styles.image} src={image} alt="image"/>
      </div>
      <div className={styles.contentscontainer}>
        <p>{title}</p>
      </div>
      <Like/>
    </div>
  );
}
