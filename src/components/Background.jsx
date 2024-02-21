import React, { useEffect, useState } from "react";
import styles from "./Background.module.css";
import fullbg from "../staticimage/bg.png";
import mobilebg from "../staticimage/mobilebg.png";

export default function Background() {
  const [viewportmode, setViewport] = useState();
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  useEffect(() => {
    if (viewportH > viewportW) {
      setViewport(true);
    } else {
      setViewport(false);
    }
  }, [viewportW, viewportH, viewportmode]);

  console.log(viewportmode);

  return (
    <div
      className={`${styles.background} ${
        viewportmode ? styles.backgroundmobile : ""
      }`}
    >
      <img src={viewportmode ? mobilebg : fullbg} alt="backgroundimage" className={styles.pageimage} />
    </div>
  );
}
