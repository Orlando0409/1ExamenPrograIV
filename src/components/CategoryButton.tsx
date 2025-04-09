
import { useState } from 'react';
import { useGetProductsByCategory } from "../services/ProductHooks";


interface CategoryButtonProps {
  onSelectCategory: (slug: string | null) => void; // Callback para notificar la categoría seleccionada
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ onSelectCategory }) => {

  const { categories } = useGetProductsByCategory('');

  const uniqueCategories = categories.filter((value, index, self) =>
    index === self.findIndex((t) => t.category.slug === value.category.slug)
  );


return (
    <div className="category-buttons">
        {uniqueCategories.map((x) => (
            <button key={x.id} onClick={() => onSelectCategory(x.category.slug)}>
                {x.category.slug} 
            </button>
        ))}
    </div>


  );
}        
 
export default CategoryButton;
