import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "../../components/Carrusel/carrusel";
import {
  arma1,
  arma2,
  arma3,
  gym1,
  gym2,
  gym3,
  moda1,
  moda2,
  moda3,
} from "./imgLanding";

import style from "./landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <Carrusel />
      <div className={style.block}>
        <img src={arma1} className={style.imgarma} />
        {/* <img src={arma2} /> */}
        <img src={arma3} className={style.imgarma} />
      </div>
      <div className={style.block}>
        <img src={gym1} className={style.imggym} />
        <img src={gym2} className={style.imggym} />
        {/* <img src={gym3} className={style.imggym} /> */}
      </div>
      <div className={style.block}>
        <img src={moda1} className={style.imgmoda} />
        {/* <img src={moda2} className={style.imgmoda} /> */}
        <img src={moda3} className={style.imgmoda} />
      </div>
    </div>
  );
};

export default Landing;
