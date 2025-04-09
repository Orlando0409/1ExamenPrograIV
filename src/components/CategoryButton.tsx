import { useGetProductsByCategory } from "../services/ProductHooks";

const CategoryButton = () => {
    const { categories } = useGetProductsByCategory('');

    const uniqueCategories = categories.filter((value, index, self) =>
        index === self.findIndex((t) => t.category.name === value.category.name)
      );

    return (
        <div className="category-buttons">
            {uniqueCategories.map((x) => (
                <button key={x.id}>
                    {x.category.name} 
                </button>
            ))}
        </div>
    );
};

export default CategoryButton;