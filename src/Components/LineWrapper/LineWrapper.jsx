import React from "react";
import LineWrapper1 from "./LineWrapperImg/LineWrapper.png";
import style from "./LineWrapper.module.css";
export default function LineWrapper() {
  return (
    <div>
      <img className={style.LineOutBlock} src={LineWrapper1} />
    </div>
  );
}
