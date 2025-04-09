import { useGetProducts, useGetProductsByTitle } from '../services/ProductHooks';

interface ListProductsProps {
  limitPages: number; // Límite de productos a mostrar
  searchTitle?: string; // Título para filtrar los productos (opcional)
  minPrice?: number; // Precio mínimo para filtrar
  maxPrice?: number; // Precio máximo para filtrar
  selectedCategorySlug?: string | null; // Slug de la categoría seleccionada (opcional)
  offset?: number; // Desplazamiento para la paginación (opcional)
}

const ListProducts: React.FC<ListProductsProps> = ({ limitPages, searchTitle, minPrice, maxPrice, selectedCategorySlug ,offset = 0 }) => {
  // Usar el hook adecuado según si se proporciona un título para buscar
  const { products, isLoading } = searchTitle
    ? useGetProductsByTitle(searchTitle, limitPages) // Filtrar por título
    : useGetProducts(limitPages, offset); // Paginación sin filtro por título

    if (isLoading) {
      return <h1>Loading...</h1>;
    }
  
    if (!products || products.length === 0) {
      return <h1>No products found</h1>;
    }
  
    // Filtrar productos por categoría, precio mínimo y máximo
    const filteredProducts = products.filter((product) => {
      const matchesCategory = selectedCategorySlug
        ? product.category?.slug === selectedCategorySlug
        : true;
      const isAboveMin = minPrice !== undefined ? product.price >= minPrice : true;
      const isBelowMax = maxPrice !== undefined ? product.price <= maxPrice : true;
      return matchesCategory && isAboveMin && isBelowMax;
    });

  return (
    <div className="results">
      {filteredProducts.map((product) => (
        <div key={product.id} className="result-item">
          <div><strong>Title:</strong> {product.slug}</div>
          <div><strong>Price:</strong> {product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;