import { createContext } from "react";

type CategoryContextType = {
    category: string;
    setCategory: (category: string) => void;
  };

const CategoryContext = createContext<CategoryContextType>({category:'', setCategory:()=>{}});

export default CategoryContext;