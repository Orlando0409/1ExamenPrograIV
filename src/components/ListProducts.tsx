
import { useGetProducts } from "../services/ProductHooks";

const ListProducts = () => {
  const { products, isLoading } = useGetProducts();
  
  if (isLoading) return <h1>Loading...</h1>;
  if (!products || products.length === 0) return <h1>No products found</h1>;

  return (
    <div className="results">
      {products.map((product) => (
        <div key={product.id} className="result-item">
          <div><strong>Title:</strong> {product.title}</div>
          <div><strong>Price:</strong> {product.price}</div>
          <div><strong>Category:</strong> {product.category?.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
