import React, { useState, useEffect } from "react";
import Filtros from "../../components/Filtros/filtros";
import CardContainer from "../../components/CardContainer/cardContainer";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import LoadingCards from "../../components/CardContainer/loadingCards";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const genero = useSelector((state) => state.genero);
  const ropa = useSelector((state) => state.ropa);
  const talla = useSelector((state) => state.talla);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getProducts())
      .then(() => setLoading(false)) // Cuando la función getProducts() se resuelve, se establece el estado de carga en falso
      .catch((error) => {
        console.error(error);
        setLoading(false); // En caso de error, también se establece el estado de carga en falso
      });
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
        {loading ? (
          <LoadingCards />
        ) : (
          <cardsContainer products={currentProducts} />
        )}
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
