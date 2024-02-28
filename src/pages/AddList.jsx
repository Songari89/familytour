import React, { useState } from "react";
import styles from "./AddList.module.css";
import { v4 as uuidv4} from 'uuid';

export default function AddList({ userId, onAdd }) {
  const [text, setText] = useState();
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0){
      return;
    }
    onAdd({id:uuidv4(), text, status: "active"})
    setText('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="준비물 추가하기✍🏼"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.submitbtn}>등록</button>
    </form>
  );
}
