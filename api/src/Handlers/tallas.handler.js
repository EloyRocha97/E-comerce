// const { Product } = require("../db");

// const getTallas = async (req, res) => {
//   try {
//     const allTallas = await Product.findAll({
//       attributes: ["talla"], // Esto seleccionará solo la columna "talla" de la tabla de productos
//       group: ["talla"], // Agrupa las tallas para eliminar duplicados
//       raw: true, // Devuelve resultados como objetos JSON simples
//     });

//     // Extrae todas las tallas en un array y aplana los arrays si existen
//     const todasLasTallas = allTallas.map((product) => product.talla).flat();

//     // Aplica la función de normalización y elimina duplicados
//     const tallasUnicas = [...new Set(todasLasTallas)];

//     res.json({ tallas: tallasUnicas });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = {
//   getTallas,
// };
