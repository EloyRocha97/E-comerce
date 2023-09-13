import React, { useState, useEffect } from "react";
import Carrusel from "../../components/Carrusel/carrusel";
import Filtros from "../../components/Filtros/filtros";
import CardContainer from "../../components/CardContainer/cardContainer";
import Pagination from "../../components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import style from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const currentProducts = allProducts.slice(
    (currentPage - 1) * 12,
    (currentPage - 1) * 12 + 12
  );

  return (
    <div className={style.margin}>
      <Carrusel />
      <div className={style.home}>
        <div className={style.filtrosWrapper}>
          <Filtros />
        </div>
        <div className={style.cardContainer}>
          <CardContainer products={currentProducts} />
        </div>
      </div>
      <div className={style.pagination}>
        <Pagination
          currentPage={currentPage}
          allProducts={allProducts ? allProducts.length : 0}
          paginate={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;
