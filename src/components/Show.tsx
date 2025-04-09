import { useContext } from "react";
import ProductContext from "../context/productContext";

type ShowTypes = {
  options: number[]; // Array de opciones recibido por props
};

const Show = ({ options }: ShowTypes) => {
  const context = useContext(ProductContext); // Access the context
  if (!context || !context.setLimitPages) {
    throw new Error("ProductContext is not properly initialized");
  }
  const { limitPages, setLimitPages } = context;

  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setLimitPages(option)}> 
          {option}
        </button>
      ))}
    </div>
  );
};

export default Show;