import React, { useContext } from "react";
import styles from "./TodoList.module.css";
import Title from "../components/Title";
import TodoListDetail from "./TodoListDetail";
import { IdContext } from "../context/IdProvider";


export default function TodoList() {
  const {id} = useContext(IdContext);
  // const id = "parents";

  return (
    <section className="section">
      <Title title="준비물"/>
      <div className={styles.contentscontainer}>
        {!id && (
          <p className="back">
            페이지 상단의 지안이를 누르고 수첩을 열어주세요!
          </p>
        )}
        {id && (
          <>
        <TodoListDetail userId={id}/>
          </>
        )}
      </div>
    </section>
  );
}
