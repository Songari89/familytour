import React, { useContext } from "react";
import styles from "./Notice.module.css";
import { IdContext } from "../context/IdProvider";
import line from "../staticimage/line.png";
import NoticeDetail from "./NoticeDetail";

export default function Notice() {
  const {id} = useContext(IdContext);

  return (
    <>
      <div className="menucontainer">
        <p className="menu">알림장</p>
        <img src={line} className="line" alt="line" />
      </div>
      <section className="section">
        {!id && (
          <p className="back">
            페이지 상단의 지안이를 누르고 수첩을 열어주세요!
          </p>
        )}
        {id && (
          <>
            <NoticeDetail id={id} />
          </>
        )}
      </section>
    </>
  );
}
