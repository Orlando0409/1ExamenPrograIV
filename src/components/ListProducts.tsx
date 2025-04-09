import { useGetProductsByTitle } from '../services/ProductHooks';

type ListProductsType ={
  limitPages: number; 
  searchTitle: string; 
}

const ListProducts = ({ limitPages, searchTitle }:ListProductsType) => {
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