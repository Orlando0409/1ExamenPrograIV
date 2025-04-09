import { useEffect, useState } from "react";
import { Product } from "../models/Products";
import { getProducts, getProductsByCategory } from "./ProductServices";


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

export const useGetProducts = (limit: number, offset: number) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const allProducts = await getProducts(limit, offset); 
          const paginatedProducts = allProducts.slice(offset, offset + limit); // Aplica el límite y el desplazamiento
          setProducts(paginatedProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [limit, offset]);
  
    return { products, isLoading };
  };