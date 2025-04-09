import { useContext } from "react";
import CategoryContext from "../context/categoryContext";

export const useCategory = () => {
    const context = useContext(CategoryContext);
    return context;
  };