import { useProductContext } from "../context/productContext";

const MinMaxPrice = () => {
  const { filters, setFilters } = useProductContext();

  return (
    <div className="price-inputs">
      <input
        type="number"
        placeholder="Min Price"
        onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) || undefined })}
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) || undefined })}
      />
    </div>
  );
};

export default MinMaxPrice;
