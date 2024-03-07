import React, { useEffect, useState } from "react";
import styles from "./AddList.module.css";
import { v4 as uuidv4} from 'uuid';
import {useQueryClient, useMutation} from '@tanstack/react-query'
import { addNewTodo } from "../apis/firebase";


export default function AddList({ userId }) {
  const [todo, setTodo] = useState({});
  const [text, setText] = useState('');
  const queryClient = useQueryClient();
  const addTodo = useMutation({mutationFn:({todo, userId}) => addNewTodo({todo, userId}), onSuccess: () => queryClient.invalidateQueries(['todos', userId])})
  const handleChange = (e) => 
    setText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0){
      return;
    }
    setTodo({id:uuidv4(), text, status: "active"})
    setText('') 
  }

  useEffect(() => {
    if (Object.keys(todo).length !== 0) {
      addTodo.mutate({todo, userId}, )
    }
  }, [todo, userId, addTodo])

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
