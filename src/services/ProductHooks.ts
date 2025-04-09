import { useEffect, useState } from "react";
import { Product } from "../models/Products";
import { getProducts, getProductsByTitle } from "./ProductServices";

export const useGetProductsByTitle = (title: string) => {
    
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
            (async () => {
                const products = await getProductsByTitle(title);
                setProducts(products);
              })();
          }, [title])

    return { products };
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