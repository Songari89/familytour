import React from "react";
import styles from "./Background.module.css";
import fullbg from "../staticimage/bg.png";
import mobilebg from "../staticimage/mobilebg.png";

export default function Background({viewportmode}) {

  return (
    <div
      className={styles.background}
    >
      <img src={viewportmode ? mobilebg : fullbg} alt="backgroundimage" className={styles.pageimage} />
    </div>
  );
}
