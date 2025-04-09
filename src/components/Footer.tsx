import { useProductContext } from "../context/productContext";

const Footer = () => {
  const {
    limitPages,
    setLimitPages,
    setSearchTitle,
    setMinPrice,
    setMaxPrice,
    setSelectedCategory,
  } = useProductContext();

  const handleReset = () => {
    setLimitPages(5);
    setSearchTitle("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSelectedCategory(null);
  };

  const handleLoadMore = () => {
    setLimitPages((prev) => prev + limitPages);
  };

  return (
    <div className="action-buttons">
      <span>Mostrando {limitPages} resultados</span>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default Footer;
