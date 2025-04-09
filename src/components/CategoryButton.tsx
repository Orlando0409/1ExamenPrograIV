import { useProductContext } from "../context/productContext";
import { useGetProductsByCategory } from "../services/ProductHooks";

const CategoryButton = () => {
  const { setFilters, filters } = useProductContext();
  const { categories } = useGetProductsByCategory('');

  const uniqueCategories = categories.filter((value, index, self) =>
    index === self.findIndex((t) => t.category.slug === value.category.slug)
  );

  return (
    <div className="category-buttons">
      {uniqueCategories.map((x) => (
        <button
          key={x.id}
          onClick={() => setFilters({ ...filters, selectedCategory: x.category.slug })}
        >
          {x.category.slug}
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;
