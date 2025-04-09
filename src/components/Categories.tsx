import  { useState } from 'react';
import { useGetProducts } from '../services/ProductHooks';
import { Product, Category } from '../models/Products';

interface CategoryProps {
  onClick?: () => void;
}

const Categories: React.FC<CategoryProps> = () => {
      const [limitPages] = useState(5);

  const { products }: { products: (Product & { category: Category })[] } = useGetProducts(limitPages, limitPages);

  return (
    <div className='categories'>
      {products.map((product) => (
        <div key={product.id}>
        <button >
          {product.category.slug } 
        </button>
        </div>
      ))}
    </div>
 
  );
};

export default Categories;