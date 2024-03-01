import React, { useState } from "react";
import styles from "./Photo.module.css";
import Title from "../components/Title";
import {Link} from 'react-router-dom'


import PhotoDetail from "./PhotoDetail";


export default function Photo() {
const [date, setDate] = useState("10May");

const handleClick = (e) => {
  const date = e.target.dataset.id;
  setDate(date);
}
    return (
      <section className="section">
        <Title title="사진첩" category="photo" />
        <div className={styles.date}>
          <button data-id="10May" onClick={handleClick}>
            5 / 10
          </button>
          <button data-id="11May" onClick={handleClick}>
            5 / 11
          </button>
          <button data-id="12May" onClick={handleClick}>
            5 / 12
          </button>
          <Link to="/upload" className={styles.upload}>
            사진 등록
          </Link>
        </div>
        <div className={styles.contentscontainer}>
          <PhotoDetail date={date}/>
        </div>
      </section>
    );;
}
