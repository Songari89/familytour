import React from "react";
import styles from "./BackgroundWrapper.module.css";
import useViewport from "../hooks/useViewport";
import fullbg from "../staticimage/bg.png";
import mobilebg from "../staticimage/mobilebg.png";


export default function BackgroundWrapper({ children }) {
  const { viewportmode, addressBar } = useViewport();

  return (
    <>
      <div className={styles.background}></div>
      <div className={viewportmode ? "mobilemode" : "deskmode"}>
        <img
          src={viewportmode ? mobilebg : fullbg}
          alt="backgroundimage"
          className={styles.pageimage}
        />
     
        {children}
      </div>
    </>
  );
}
