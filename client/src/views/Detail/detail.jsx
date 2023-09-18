import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getProductById } from "../../redux/actions";
import style from "./detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.productById);
  console.log(products);

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(clearState(id));
  }, [dispatch, id]);

  return (
    <div className={style.contenedor}>
      <img className={style.image} src={products.imagen} alt="" />
      <div className={style.info}>
        <h1>{products.nombre} </h1>
        <div className={style.precio}>
          <p>${products.precio}</p>
        </div>
        <h4>{products.descripcion}</h4>

        <h4>Comprando por mayor un 20% de descuento.</h4>
        <div className={style.mayor}>
          <h5>(se considera compra por mayor a partir de las 5 prendas)</h5>
        </div>
      </div>
    </div>
  );
};

export default Detail;
