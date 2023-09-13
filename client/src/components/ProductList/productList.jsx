import React from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const filters = useSelector((state) => state.filters);

  // Aplicar los filtros a la lista de productos
  const filteredProducts = products.filter((product) => {
    // Aplicar filtro por género
    if (filters.genero !== "Ambos" && product.genero !== filters.genero) {
      return false;
    }

    // Aplicar filtro por ropa
    if (filters.ropa !== "Todo" && product.ropa !== filters.ropa) {
      return false;
    }

    // Aplicar filtro por talla
    if (filters.talla !== "Todos" && product.talla !== filters.talla) {
      return false;
    }

    // Si pasa todos los filtros, incluir el producto en la lista filtrada
    return true;
  });

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.nombre} - Género: {product.genero}, Ropa: {product.ropa},
            Talla: {product.talla}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
