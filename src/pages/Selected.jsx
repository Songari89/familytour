import React, { useContext } from "react";
import useViewport from "../hooks/useViewport";
import { IdContext } from "../context/IdProvider";
import styles from "./Selected.module.css";
import jian from "../staticimage/fulljian.png";
import heart from "../staticimage/fullheart.svg";

export default function Selected() {
  const { viewportmode } = useViewport();
  const { id, strId } = useContext(IdContext);

  return (
    <section className="section">
      <div
        className={`${styles.contentscontainer} ${
          viewportmode && styles.mobilecontents
        }`}
      >
        <div
          className={`${styles.idcontainer} ${viewportmode && styles.mobileid}`}
        >
          {!strId && (
            <p className={styles.text}>페이지 상단의 지안이를 눌러주세요!</p>
          )}
          {strId && (
            <>
              <p className={styles.strid}>{strId}!</p>
              <p className={styles.text}>원하는 메뉴를 선택해주세요!</p>
            </>
          )}
        </div>
        <div
          className={`${styles.jiancontainer} ${
            viewportmode && styles.mobilejian
          }`}
        >
          <img src={jian} className={styles.jianimage} alt="jian" />
          <img
            src={heart}
            className={`${styles.heart} ${styles.heart1}`}
            alt="heart"
          />
          <img
            src={heart}
            className={`${styles.heart} ${styles.heart2}`}
            alt="heart"
          />
          <img
            src={heart}
            className={`${styles.heart} ${styles.heart3}`}
            alt="heart"
          />
        </div>
      </div>
    </section>
  );
}
