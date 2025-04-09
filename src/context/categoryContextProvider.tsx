import { JSX, useState } from "react";
import CategoryContext from "./categoryContext";

type categoryContextType = {
    children: JSX.Element;
};

const CategoryContextProvider = ({ children }: categoryContextType) => {
  
    const [category, setCategory] = useState('');
    
    return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
