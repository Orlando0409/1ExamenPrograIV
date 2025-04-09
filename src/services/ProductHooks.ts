import { useEffect, useState } from "react";
import { Product } from "../models/Products";
import { getProducts, getProductsByCategory } from "./ProductServices";
import { useProductContext } from "../context/productContext";

export const useGetProducts = (limit: number, offset: number) => {
  const { filters } = useProductContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let filteredProducts: Product[] = [];
      
      // Filtra por título si se aplica
      if (filters.searchTitle) {
        filteredProducts = await getProducts(limit, offset, filters.searchTitle);
      } 
      // Filtra por categoría si se aplica
      else if (filters.selectedCategory) {
        filteredProducts = await getProductsByCategory(filters.selectedCategory);
      } 
      // Si no hay filtros, obtenemos productos sin filtros
      else {
        filteredProducts = await getProducts(limit, offset);
      }

      // Filtra por precio si es necesario
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