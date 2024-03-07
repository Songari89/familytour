import React, { useEffect, useState } from "react";
import styles from "./TodoListDetail.module.css";
import AddList from "./AddList";
import Todo from "./Todo";
import {useQuery} from '@tanstack/react-query'
import { getTodo } from "../apis/firebase";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function TodoListDetail({userId}) {
  const [todos, setTodos] = useState();
  const [checked, setChecked] = useState(false);
  const {isLoading, error, data:items} = useQuery({
    queryKey:['todos', userId || ""],
    queryFn: () => getTodo(userId),
    enabled: !!userId
  })

  const handleClick = () => setChecked(pre => !pre)

  useEffect(() => {
    if(items) {
      setTodos(items)
    }
  },[items])

    if(isLoading) {
      return <Loading />;
    }
    if (error) {
      return <Error />;
    }


  return (
    <>
    <ul className={styles.lists}>
      {todos && todos.filter(item => checked? item.status === 'done' : item.status === 'active').map((item) => <Todo key={item.id} todo={item} userId={userId}/> )}</ul>
    <div className={styles.formcontainer}>
    {!checked && <AddList userId={userId}/>}
  
    </div>  
    <div className={styles.buttoncontainer}>
    <button className={styles.checkedbtn} onClick={handleClick}>{checked?"준비할 것!" : "준비 완료!"} </button></div>
    </>
  );
}
