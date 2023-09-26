import React, { useState, useEffect } from "react";
import Filtros from "../../components/Filtros/filtros";
import CardContainer from "../../components/CardContainer/cardContainer";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const genero = useSelector((state) => state.genero);
  const ropa = useSelector((state) => state.ropa);
  const talla = useSelector((state) => state.talla);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = allProducts.filter((product) => {
    if (genero && genero !== "Ambos" && product.genero !== genero) {
      return false;
    }
    if (ropa && ropa !== "Todo" && product.tipo !== ropa) {
      return false;
    }
    if (talla && talla !== "Todos") {
      if (!product.talla.includes(talla)) {
        return false;
      }
    }
    return true;
  });

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * 20,
    (currentPage - 1) * 20 + 20
  );

  return (
    <div className={style.margin}>
      <div className={style.home}>
        <Filtros />
        <CardContainer products={currentProducts} />
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          allProducts={filteredProducts.length}
          paginate={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;
