import React from "react";
import styles from "./Header.module.css";
import jian from "../staticimage/jian.png";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.headcontainer}>
      <img src={jian} className={styles.jianicon} alt="headerimage" />
      <div className={styles.navcontainer}>
        <p className={styles.headtext}>
          <span className={styles.jian}>지안이</span>와 <br></br>함께 떠나는
          가족여행 2024
        </p>
        <nav className={styles.nav}>
          <Link to="/notice">알림당</Link>
        </nav>
      </div>
    </header>
  );
}
