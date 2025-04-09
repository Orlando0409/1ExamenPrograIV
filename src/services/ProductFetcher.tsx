import { useProductContext } from "../context/productContext";
import { useGetProducts, useGetProductsByCategory, useGetProductsByTitle } from "./ProductHooks";

const ProductFetcher = () => {
  const { filters, limitPages } = useProductContext();
  const { searchTitle, selectedCategory } = filters;

  const { products, isLoading } = useGetProducts(limitPages, 0); // Obtiene productos cuando no hay filtros
  const { categories: categoryProducts } = useGetProductsByCategory(selectedCategory || ''); // Obtiene productos por categoría
  const { products: titleProducts } = useGetProductsByTitle(searchTitle, limitPages); // Obtiene productos por título

  // Selecciona los productos según el filtro activo
  let filteredProducts = products;

  if (searchTitle) {
    filteredProducts = titleProducts; // Si hay un título, usa los productos filtrados por título
  } else if (selectedCategory) {
    filteredProducts = categoryProducts; // Si hay una categoría, usa los productos filtrados por categoría
  }

  // Aquí puedes actualizar el contexto o el estado con los productos filtrados si es necesario

  return null; // Este componente no necesita renderizar nada directamente, solo actualiza el contexto
};

export default ProductFetcher;
