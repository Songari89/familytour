import React from "react";
import styles from "./PlaceItem.module.css";
import Like from "./Like";
import {Link} from 'react-router-dom'

export default function PlaceItem({ list }) {
  const {id, title, address, addressurl, image, pay, time, description, category} = list;
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <img className={styles.image} src={image} alt="placeimage" />
      </div>
      <div className={styles.contentscontainer}>
        <div className={styles.titlecontainer}>
          <p>{title}</p>
          <Like list={list} />
        </div>
        <div className={styles.textcontainer}>
          <p className={styles.subtitle}>
            <span className={styles.dot}>•</span>특징 :{" "}
          </p>
          <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.textcontainer}>
          <p className={styles.subtitle}>
            <span className={styles.dot}>•</span>주소 :{" "}
          </p>
          <p className={styles.text}>
            {address}
            {"\u00A0"}
            <Link
              className={styles.link}
              to={addressurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ☞ 지도보기
            </Link>
          </p>
        </div>
        <div className={styles.textcontainer}>
          <p className={styles.subtitle2}>
            <span className={styles.dot}>•</span>운영시간 :{" "}
          </p>
          <p className={styles.text2}>{time}</p>
        </div>
        <div className={styles.textcontainer}>
          <p className={styles.subtitle3}>
            <span className={styles.dot}>•</span>
            {category === "place" ? "입장권 : " : "가격 : "}
          </p>
          <p className={styles.text3}>{pay}</p>
        </div>
      </div>
    </div>
  );
}
