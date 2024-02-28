import React from "react";
import styles from "./Todo.module.css";
import trash from '../staticimage/trash.svg';
import {useQueryClient, useMutation} from '@tanstack/react-query';
import { removeTodo, updateTodo } from "../apis/firebase";

export default function Todo({todo, userId }) {
  const id = todo.id;
  const queryClient = useQueryClient();
  const updateItem = useMutation({
    mutationFn: ({todo, userId}) => updateTodo({todo, userId}),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos', userId])
    }
  })
  const removeItem = useMutation({
    mutationFn:({userId, id}) => removeTodo({userId, id}),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos', userId])
    }
  })
  const handleChange = (e) => {
    const status = e.target.checked? 'done' : "active";
    updateItem.mutate({todo:{...todo,status}, userId})
  }

  const handleDelete = () => removeItem.mutate({userId,id})
  return (
    <li className={styles.list}>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={todo.status === "done"}
          onChange={handleChange}
          className={styles.checkbox}
        />
        <label htmlFor="checkbox" className={styles.checkboxcustom}>
          <span>{todo.text}</span>
        </label>
      </div>
      <img
        className={styles.trash}
        src={trash}
        alt="trash"
        onClick={handleDelete}
      />
    </li>
  );
}
