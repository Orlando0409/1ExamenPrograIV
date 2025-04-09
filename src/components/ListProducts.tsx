import { useGetProductsByTitle } from '../services/ProductHooks';

interface ListProductsProps {
  limitPages: number; // Límite de productos a mostrar
  searchTitle: string; // Título para filtrar los productos
}

const ListProducts: React.FC<ListProductsProps> = ({ limitPages, searchTitle }) => {
  const { products, isLoading } = useGetProductsByTitle(searchTitle, limitPages); // Filtra por título y aplica el límite

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