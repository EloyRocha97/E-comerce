import Card from "../Card/card";
import { useSelector } from "react-redux";
import style from "./cardContainer.module.css";

const CardContainer = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className={style.container}>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
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
};

export default CardContainer;
