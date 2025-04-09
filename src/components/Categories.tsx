import  { useState } from 'react';
import { useGetProducts } from '../services/ProductHooks';

interface CategoryProps {
  onClick?: () => void;
}

const Categories: React.FC<CategoryProps> = () => {
      const [limitPages] = useState(5);

  const { products } = useGetProducts(limitPages, limitPages);

  return (
    <div className='categories'>
      {products.map((product) => (
        <div key={product.id}>
        <button >
          {product.id}
        </button>
        </div>
      ))}
    </div>
 
  );
};

export default Categories;