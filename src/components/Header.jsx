import React from "react";
import styles from "./Header.module.css";
import jian from "../staticimage/jian.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ viewportmode }) {
  const navigate = useNavigate();

  return (
    <header
      className={`${styles.headcontainer} ${
        viewportmode && styles.mobileheadcontainer
      }`}
    >
      <img
        src={jian}
        className={styles.jianicon}
        alt="headerimage"
        onClick={() => {
          navigate("/");
        }}
      />

      <div className={styles.navcontainer}>
        <p className={styles.headtext}>
          <span className={styles.jian}>지안이</span>와 <br></br>함께 떠나는
          가족여행 2024
        </p>
        <nav className={styles.nav}>
          <Link to="/notice">알림장</Link>
          <span>/</span>
          <Link to="/todolist">준비물</Link>
          <span>/</span>
          <Link to="/photo">사진첩</Link>
          <span>/</span>
          <Link to="/places">관광지</Link>
        </nav>
      </div>
    </header>
  );
}
