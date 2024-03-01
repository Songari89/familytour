import React from "react";
import styles from "./Error.module.css";
import jian from "../staticimage/error.png";
import erroricon from "../staticimage/erroricon.svg";
import useViewport from "../hooks/useViewport";

export default function Error() {
  const { viewportmode } = useViewport();

  return (
    <section className={`section ${!viewportmode && styles.desk}`}>
      <div className={styles.imagecontainer}>
        <img src={erroricon} className={styles.errorimage} alt="error" />
        <img src={jian} className={styles.jianimage} alt="jian" />
      </div>
      <div className={styles.contentscontainer}>
        <p>페이지를 찾을 수 없어요 ㅠㅇㅠ</p>
      </div>
    </section>
  );
}
