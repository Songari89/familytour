import React, { useContext } from "react";
import styles from "./Notice.module.css";
import { IdContext } from "../context/IdProvider";

import NoticeDetail from "./NoticeDetail";
import Title from "../components/Title";

export default function Notice() {
  const {id} = useContext(IdContext);

  return (
   
      
      <section className="section">
        <Title title="알림장"/>
      <div className={styles.contentscontainer}>
        {!id && (
          <p className="back">
            페이지 상단의 지안이를 누르고 수첩을 열어주세요!
          </p>
        )}
        {id && (
          <>
            <NoticeDetail id={id} />
          </>
        )}</div>
      </section>
 
  );
}
