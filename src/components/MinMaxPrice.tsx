interface MinMaxPriceProps {
    onMinPriceChange: (minPrice: number | undefined) => void;
    onMaxPriceChange: (maxPrice: number | undefined) => void;
  }
  
  const MinMaxPrice: React.FC<MinMaxPriceProps> = ({ onMinPriceChange, onMaxPriceChange }) => {
    return (
      <div className="price-inputs">
        <input
          type="number"
          placeholder="Min Price"
          onChange={(e) => onMinPriceChange(Number(e.target.value) || undefined)}
        />
        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => onMaxPriceChange(Number(e.target.value) || undefined)}
        />
      </div>
    );
  };
  
  export default MinMaxPrice;