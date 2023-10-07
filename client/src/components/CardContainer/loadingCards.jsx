import React from "react";
import style from "./loadingCards.module.css";

const LoadingCards = () => {
  return (
    <div className={style.container}>
      <span className={style.image}></span>
    </div>
  );
};

export default LoadingCards;
