import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "../../components/Carrusel/Carru";
import { arma1, arma2, gym1, gym2, moda1, moda2 } from "./imgLanding";

import style from "./landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <Carrusel />
      <div className={style.block}>
        <img src={arma1} className={style.imgarma} />
        <img src={arma2} className={style.imgarma} />
      </div>
      <div className={style.block}>
        <img src={gym1} className={style.imggym} />
        <img src={gym2} className={style.imggym} />
      </div>
      <div className={style.block}>
        <img src={moda1} className={style.imgmoda} />
        <img src={moda2} className={style.imgmoda} />
      </div>
    </div>
  );
};

export default Landing;
