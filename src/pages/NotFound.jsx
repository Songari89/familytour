import React from "react";
import Error from "../components/Error";
import useViewport from "../hooks/useViewport";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import fullbg from "../staticimage/bg.png";
import mobilebg from "../staticimage/mobilebg.png";

export default function NotFound() {
  const { viewportmode } = useViewport();
  return (
    <div className={styles.container}>
      <div className={styles.linkcontainer}>
        <Link to="/" className={styles.home}>
          홈으로
        </Link>
      </div>
      <div className={` ${viewportmode ? "mobilemode" : "deskmode"} ${styles.elealign}`}>
      
          <Error />
       
        <img
          className={styles.pageimage}
          src={viewportmode ? mobilebg : fullbg}
          alt="bgimage"
        />
      </div>
    </div>
  );
}
