import { useGetProductsByCategory } from "../services/ProductHooks";

type CategoryButtonType = {
    onCategoryClick: (category: string) => void;
};

const CategoryButton = ({onCategoryClick} : CategoryButtonType ) => {
    const { categories } = useGetProductsByCategory('');

    const uniqueCategories = categories.filter((value, index, self) =>
        index === self.findIndex((t) => t.category.name === value.category.name)
      );

      const handleCategoryClick = (category: string) => {
        onCategoryClick(category);
    }

    return (
        <div className="category-buttons">
            {uniqueCategories.map((x) => (
                <button key={x.id} onClick={() => handleCategoryClick(x.category.name)}>
                    {x.category.name} 
                </button>
            ))}
        </div>
    );
};

export default CategoryButton;