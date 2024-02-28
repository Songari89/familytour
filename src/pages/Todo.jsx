import React from "react";
import styles from "./Todo.module.css";
import trash from '../staticimage/trash.svg';

export default function Todo({ id, todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked? 'done' : "active";
    onUpdate({...todo,status})
  }
const handleDelete = () => onDelete(todo)
  return (
    <li className={styles.list}>
      <div>
      <input type="checkbox" id="checkbox" checked={status === "done"} onChange={handleChange}/>
      <label  htmlFor="checkbox">{text}</label></div>
      <img className={styles.trash} src={trash} alt="trash" onClick={handleDelete}/>
    </li>
  );
}
