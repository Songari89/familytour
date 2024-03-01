import React, { useState } from "react";
import styles from "./Photo.module.css";
import Title from "../components/Title";
import {Link} from 'react-router-dom';

import PhotoDetail from "./PhotoDetail";


export default function Photo() {

    return (
      <section className="section">
        <Title title="사진첩" category="photo" />
        <div className={styles.date}>
          <Link to="/photo/10May" state={{ date: "10May" }}>
            5 / 10
          </Link>
          <Link to="/photo/11May" state={{ date: "11May" }}>
            5 / 11
          </Link>
          <Link to="/photo/12May" state={{ date: "12May" }}>
            5 / 12
          </Link>
          <Link to="/upload" className={styles.upload}>
            사진 등록
          </Link>
        </div>
        <div className={styles.contentscontainer}>
          <PhotoDetail />
        </div>
      </section>
    );;
}
