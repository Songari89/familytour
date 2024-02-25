import React from "react";
import styles from "./Loading.module.css";
import jian from "../staticimage/error.png";
import useViewport from "../hooks/useViewport";

export default function Loading() {
  const { viewportmode } = useViewport();

  console.log(viewportmode);
  return (
    <section className={`section ${!viewportmode && styles.desk}`}>
      <img src={jian} className={styles.jianimage} alt="jian" />
      <div className={styles.contentscontainer}>
        <p>페이지를 읽고 있어요.</p>
        <p>잠시만 기다려주세요ㅠㅇㅠ</p>
        <div className={styles.loadingbar}></div>
      </div>
    </section>
  );
}
