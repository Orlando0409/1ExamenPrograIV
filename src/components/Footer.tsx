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
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedCategory('');
  };

  const handleLoadMore = () => {
    setLimitPages(limitPages + limitPages);
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
