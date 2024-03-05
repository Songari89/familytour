import React, { useState } from "react";
import styles from "./Places.module.css";
import Title from "../components/Title";
import PlaceDetail from "./PlaceDetail";

export default function Places() {
  const [category, setCategory] = useState("place");

const handleClick = (e) => {
  const category = e.target.dataset.id;
  setCategory(category);
}
    return (
      <section className="section">
        <Title title="관광지"/>
        <div className={styles.category}>
          <button data-id="place" onClick={handleClick}>
            가볼만한 곳
          </button>
          <button data-id="11May" onClick={handleClick}>
            맛집
          </button>
        </div>
        <div className={styles.contentscontainer}>
          <PlaceDetail category={category}/>
        </div>
      </section>)
}
