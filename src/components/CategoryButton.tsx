import { useGetProductsByCategory } from "../services/ProductHooks";


const CategoryButton = () => {
    const { categories } = useGetProductsByCategory('');

    const uniqueCategories = Array.from(
        new Map(categories.map((x) => [x.category.id, x.category])).values()
    );

    return (
        <div className="category-buttons">
            {uniqueCategories.map((x) => (
                <button key={x.id}>
                    {x.name} 
                </button>
            ))}
        </div>
    );
};

export default CategoryButton;
