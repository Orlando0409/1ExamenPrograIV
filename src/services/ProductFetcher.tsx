import { useProductContext } from "../context/productContext";
import { useGetProducts, useGetProductsByCategory, useGetProductsByTitle } from "./ProductHooks";

const ProductFetcher = () => {
  const { filters, limitPages } = useProductContext();
  const { searchTitle, selectedCategory } = filters;

  const { products, isLoading } = useGetProducts(limitPages, 0); // Obtiene productos cuando no hay filtros
  const { categories: categoryProducts } = useGetProductsByCategory(selectedCategory || ''); // Obtiene productos por categoría
  const { products: titleProducts } = useGetProductsByTitle(searchTitle, limitPages); // Obtiene productos por título

  let filteredProducts = products;

  if (searchTitle) {
    filteredProducts = titleProducts; 
  } else if (selectedCategory) {
    filteredProducts = categoryProducts; 
  }
  return null; // Este componente no necesita renderizar nada directamente, solo actualiza el contexto
};

export default ProductFetcher;
