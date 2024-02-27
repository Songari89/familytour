import React from "react";
import line from "../staticimage/line.png";

export default function Title({title}) {
  return (
    <div className="menucontainer">
      <p className="menu">{title}</p>
      <img src={line} className="line" alt="line" />
    </div>
  );
}
