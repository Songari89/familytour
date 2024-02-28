import React, { useState } from "react";
import styles from "./TodoListDetail.module.css";
import AddList from "./AddList";
import Todo from "./Todo";

export default function TodoListDetail({useId}) {
  const [todos, setTodos] = useState([
    { id: "1234", text: "여권", status: "active" },
    { id: "5678", text: "환전(현금)", status: "active" },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo])
  }
  const handleUpdate = (updated) => setTodos(todos.map(t => (t.id === updated.id ? updated : t)))
  const handleDelete = (deleted) => setTodos(todos.filter(t => t.id !== deleted.id))

  return (
    <>
    <ul className={styles.lists}>{todos && todos.map((item) => <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete}/> )}</ul>
    <div className={styles.formcontainer}>
    <AddList useId={useId} onAdd={handleAdd}/>
  
    </div>  <button></button>
    </>
  );
}
