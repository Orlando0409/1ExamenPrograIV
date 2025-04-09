import { useContext } from "react";
import ProductContext from "../context/productContext";
import { useGetProducts } from "../services/ProductHooks";

const ListProducts = () => {
  const productContext = useContext(ProductContext); 
  const limitPages = productContext?.limitPages ?? 10; 
  const { products, isLoading } = useGetProducts(limitPages, 0);

  if (isLoading) return <h1>Loading...</h1>;
  if (!products || products.length === 0) return <h1>No products found</h1>;

  const limitedProducts = products.slice(0, limitPages);

  return (
    <div className="results">
      {limitedProducts.map((product) => (
        <div key={product.id} className="result-item">
          <div>
            <div>
            <strong>Title:</strong> {product.slug}
            </div>
            <div><strong>Price:</strong> ${product.price}</div>
            <div><strong>Category:</strong> {product.category?.slug || "N/A"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
