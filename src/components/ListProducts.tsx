import { useCategory } from '../services/CategoryHooks';
import { useGetProductsByTitle } from '../services/ProductHooks';

type ListProductsType ={
  limitPages: number; 
  searchTitle: string; 
}

const ListProducts = ({ limitPages, searchTitle }:ListProductsType) => {
  const {category} = useCategory();
  const { products, isLoading } = useGetProductsByTitle(searchTitle, limitPages); 

 
  const filteredProducts = () => {
    if (category) {
      return products.filter((product) => product.category.name === category);
    }
    return products;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="results">
      {filteredProducts().map((product) => (
        <div key={product.id} className="result-item">
          <div><strong>Title:</strong> {product.slug}</div>
          <div><strong>Price:</strong> {product.price}</div>
          <div><strong>Category:</strong> {product.category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;