import React, { useContext } from "react";
import styles from "./Select.module.css";
import jian from "../staticimage/jianfull.png";
import useViewport from "../hooks/useViewport";
import { IdContext } from "../context/IdProvider";
import {useNavigate} from 'react-router-dom'

export default function Select() {
  const {viewportmode} = useViewport();
  const navigate = useNavigate();
  const {setId} = useContext(IdContext);
  const handleClick = (e) => {
    const id = e.target.dataset.id;
    setId(id);
    navigate('/selected')
  };

  return (
    <section className={styles.container}>
      <div className={styles.titlecontainer}>
        <p className={styles.title}>누구의 수첩을 열까요?</p>
      </div>
      <div
        className={`${styles.contentscontainer} ${
          viewportmode && styles.mobilecontents
        }`}
      >
        <div
          className={`${styles.idcontainer} ${viewportmode && styles.mobileid}`}
        >
          <button data-id="grandparents" className={styles.btn} onClick={handleClick}>
            할아버지, 할머니
          </button>

          <button data-id="parents" className={styles.btn} onClick={handleClick}>
            아빠, 엄마
          </button>

          <button data-id="aunt" className={styles.btn} onClick={handleClick}>
            이모
          </button>

          <button data-id="uncle" className={styles.btn} onClick={handleClick}>
            삼촌
          </button>
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
