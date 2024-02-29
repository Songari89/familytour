import React, { useState } from "react";
import styles from "./Photo.module.css";
import Title from "../components/Title";
import {Link} from 'react-router-dom';

import PhotoDetail from "./PhotoDetail";


export default function Photo() {
  const [date, setDate] = useState()

    return (
      <section className="section">
        <Title title="사진첩" category="photo" />
        <div className={styles.date}>
          <button>5 / 10</button>
          <button>5 / 11</button>
          <button>5 / 12</button>
          <Link to='/upload' className={styles.upload}>사진 등록</Link>
        </div>
        <div className={styles.contentscontainer}>
          <PhotoDetail/>
        </div>
      </section>
    );;
}
