import { useContext } from "react";
import CategoryContext from "../context/categoryContext";

export const useCategory = () => {
    const context = useContext(CategoryContext);console.log("Current category from context:", context.category); 
    return context;
  };