import React from "react";
import styles from "./Photo.module.css";
import Title from "../components/Title";
import {Link} from 'react-router-dom';


export default function Photo() {


    return (
      <section className="section">
        <Title title="사진첩" category="photo" />
        <div className={styles.date}>
          <button>5 / 10</button>
          <button>5 / 11</button>
          <button>5 / 12</button>
          <Link to='/upload'>사진 등록</Link>
        </div>
        <div className={styles.contentscontainer}></div>
      </section>
    );;
}
