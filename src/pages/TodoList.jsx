import React from "react";
import styles from "./TodoList.module.css";
import useViewport from "../hooks/useViewport";

export default function TodoList() {
  const {viewportmode} = useViewport();

  console.log(viewportmode);
  return (
    
    <></>
  );
}
