import Card from "../Card/card";
import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./cardContainer.module.css";

const CardContainer = forwardRef(({ products }, ref) => {
  // const products = useSelector((state) => state.products);
  return (
    <div className={style.container} ref={ref}>
      {products.map((product, index) => {
        return (
          <Link className={style.link} to={`/product/${product.id}`}>
            <Card
              key={`${product.id}-${index}`}
              nombre={product.nombre}
              imagen={product.imagen}
              descripcion={product.descripcion}
              precio={product.precio}
              tipo={product.tipo}
            />
          </Link>
        );
      })}
    </div>
  );
});

export default CardContainer;
