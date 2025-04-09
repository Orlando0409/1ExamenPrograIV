import { useGetProducts } from '../services/ProductHooks';

interface ListProductsProps {
  limitPages: number; 
}

const ListProducts: React.FC<ListProductsProps> = ({ limitPages }) => {
  const { products, isLoading } = useGetProducts(limitPages, 0); // Offset es 0 para simplicidad

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="results">
      {products.map((product) => (
        <div key={product.id} className="result-item">
          <div><strong>Title:</strong> {product.slug}</div>
          <div><strong>Price:</strong> {product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;