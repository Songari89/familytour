import React from "react";
import Error from "../components/Error";
import Background from "../components/Background";
import useViewport from "../hooks/useViewport";
import {Link} from 'react-router-dom';
import styles from './NotFound.module.css';


export default function NotFound() {
  const {viewportmode} = useViewport();
  return (
    <>
      <Background />
      <div className={styles.linkcontainer}>
      <Link to="/" className={styles.home}>홈으로</Link></div>
      <div className={viewportmode ? "mobilemode" : "deskmode"}>
        <Error />
      </div>
      
    </>
  );
}
