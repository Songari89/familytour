import React, { useContext } from "react";
import useViewport from "../hooks/useViewport";
import { IdContext } from "../context/IdProvider";
import styles from './Selected.module.css';
import jian from "../staticimage/jianfull.png";

const family = {
  grandparents: '할아버지, 할머니',
  parents: '아빠, 엄마',
  aunt: '이모',
  uncle: '삼촌'
}

export default function Selected() {
  const {viewportmode} = useViewport();
  const {id} = useContext(IdContext); 

  console.log(family[id])

  return (
    <section className={styles.container}>
      <div
        className={`${styles.contentscontainer} ${
          viewportmode && styles.mobilecontents
        }`}
      >
        <div
          className={`${styles.idcontainer} ${viewportmode && styles.mobileid}`}
        >
        </div>
        <div
          className={`${styles.jiancontainer} ${
            viewportmode && styles.mobilejian
          }`}
        >
          <img src={jian} className={styles.jianimage} alt="jian" />
        </div>
      </div>
    </section>
  );
}
