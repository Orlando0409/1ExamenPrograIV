import { useEffect, useState } from "react";
import { Product } from "../models/Products";
import { getProducts, getProductsByCategory, getProductsByTitle } from "./ProductServices";
import { useProductContext } from "../context/productContext";

export const useGetProductsByTitle = (title: string, limit: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
        const filteredProducts = await getProductsByTitle(title); 
        setProducts(filteredProducts.slice(0, limit)); 
      
        setIsLoading(false);

    };

    fetchData();
  }, [title, limit]);

  return { products, isLoading };
};

export const useGetProducts = (limit: number, offset: number) => {
  const { filters } = useProductContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let filteredProducts: Product[] = [];
      
      if (filters.searchTitle) {
        filteredProducts = await getProductsByTitle(filters.searchTitle);
      } 
      else if (filters.selectedCategory) {
        filteredProducts = await getProductsByCategory(filters.selectedCategory);
      } 
      else {
        filteredProducts = await getProducts(limit, offset);
      }

      if (filters.minPrice || filters.maxPrice) {
        filteredProducts = filteredProducts.filter(product => {
          const isPriceValid = 
            (filters.minPrice ? product.price >= filters.minPrice : true) && 
            (filters.maxPrice ? product.price <= filters.maxPrice : true);
          return isPriceValid;
        });
      }

      setProducts(filteredProducts);
      setIsLoading(false);
    };

    fetchData();
  }, [filters, limit, offset]); // Vuelve a cargar los productos cuando los filtros o el límite cambian

  return { products, isLoading };
};

  export const useGetProductsByCategory = (category: string) => {
    
    const [categories, setCategories] = useState<Product[]>([]);

    useEffect(() => {
            (async () => {
                const data = await getProductsByCategory(category);
                setCategories(data);
              })();
          }, [category])

    return { categories };
}