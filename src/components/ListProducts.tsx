import { useContext } from "react";
import ProductContext from "../context/productContext";
import { useGetProducts } from "../services/ProductHooks";

const ListProducts = () => {
  const productContext = useContext(ProductContext); // Obtén el contexto de productos
  const limitPages = productContext?.limitPages ?? 10; // Usa un valor predeterminado si no está definido
  const { products, isLoading } = useGetProducts(limitPages, 0);

  if (isLoading) return <h1>Loading...</h1>;
  if (!products || products.length === 0) return <h1>No products found</h1>;

  // Filtrar los productos según el límite de página
  const limitedProducts = products.slice(0, limitPages);

  return (
    <div className="results">
      {limitedProducts.map((product) => (
        <div key={product.id} className="result-item">
          <div>
            <strong>Title:</strong> {product.slug}
            <strong>Price:</strong> ${product.price}
            <strong>Category:</strong> {product.category?.slug || "N/A"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
