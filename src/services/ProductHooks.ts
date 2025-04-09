import { useEffect, useState } from "react";
import { Product } from "../models/Products";
import { getProducts, getProductsByCategory, getProductsByTitle } from "./ProductServices";

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
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        
          const allProducts = await getProducts(limit, offset); 
          const paginatedProducts = allProducts.slice(offset, offset + limit); // Aplica el límite y el desplazamiento
          setProducts(paginatedProducts);
        
          setIsLoading(false);
        
      };
  
      fetchData();
    }, [limit, offset]);
  
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