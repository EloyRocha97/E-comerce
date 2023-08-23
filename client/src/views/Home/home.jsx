import React from "react";
import CardContainer from "../../components/CardContainer/cardContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import style from "./home.module.css";
import Filtros from "../../components/Filtros/filtros";
import Carrusel from "../../components/Carrusel/carrusel";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={style.margin}>
      <Carrusel />
      <div className={style.home}>
        <div className={style.filtrosWrapper}>
          <Filtros />
        </div>
        <div className={style.cardContainer}>
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
