import Card from "../Card/card";
import React, { forwardRef } from "react";
import style from "./cardContainer.module.css";
import { useSelector } from "react-redux";

const CardContainer = forwardRef(({ products }, ref) => {
  // const products = useSelector((state) => state.products);
  return (
    <div className={style.container} ref={ref}>
      {products.map((product, index) => {
        return (
          <Card
            key={`${product.id}-${index}`}
            nombre={product.nombre}
            imagen={product.imagen}
            descripcion={product.descripcion}
            precio={product.precio}
            tipo={product.tipo}
          />
        );
      })}
    </div>
  );
});

export default CardContainer;
