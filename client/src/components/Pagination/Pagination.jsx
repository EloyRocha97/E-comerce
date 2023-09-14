import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ currentPage, allProducts, paginate }) {
  const totalPages = Math.ceil(allProducts / 20);

  let numbers = [];
  let startPage = 1;
  let endPage = Math.min(totalPages, 5);

  if (currentPage <= 3) {
    endPage = Math.min(5, totalPages);
  } else if (currentPage >= totalPages - 2) {
    startPage = Math.max(1, totalPages - 4);
    endPage = totalPages;
  } else {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
  }

  for (let i = startPage; i <= endPage; i++) {
    numbers.push(i);
  }

  const handlePageChange = (numero) => {
    paginate(numero);
    window.scrollTo(0, 0); // Desplazar al principio de la página
  };

  const handlerAdelante = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlerAtras = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  const handlerFirst = () => {
    handlePageChange(1);
  };

  const handlerLast = () => {
    handlePageChange(totalPages);
  };

  return (
    <div className={styles.Pagination}>
      <button className={styles.direction} onClick={handlerFirst}>
        {"<<<"}
      </button>
      <button className={styles.direction} onClick={handlerAtras}>
        {"<"}
      </button>

      {currentPage >= 4 && (
        <button disabled={true} className={styles.btnDisabled}>
          ...
        </button>
      )}
      {numbers?.map((numero) => {
        return (
          <button
            className={currentPage !== numero ? styles.btn : styles.current}
            onClick={() => handlePageChange(numero)}
            key={numero}
          >
            {numero}
          </button>
        );
      })}
      {currentPage < 10 && (
        <button disabled={true} className={styles.btnDisabled}>
          ...
        </button>
      )}
      <button className={styles.direction} onClick={handlerAdelante}>
        {">"}
      </button>
      <button className={styles.direction} onClick={handlerLast}>
        {">>>"}
      </button>
    </div>
  );
}
