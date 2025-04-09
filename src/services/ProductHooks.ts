import { useEffect, useState } from "react";
import { Product } from "../models/Products";
import { getProducts, getProductsByCategory } from "./ProductServices";


export const useGetProductsFiltered = (categorySlug: string | null, selectedCategorySlug: string | null, limit: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let filteredProducts: Product[] = [];

        if (categorySlug) {
          // Filtrar por categoría usando el slug
          filteredProducts = await getProductsByCategory(categorySlug);
        } else {
          // Si no hay categoría seleccionada, devolver todos los productos
          filteredProducts = await getProductsByCategory();
        }

        // Aplicar el límite
        setProducts(filteredProducts.slice(0, limit));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categorySlug, limit]);

  return { products, isLoading };
};

export const useGetProducts = (limit: number, offset: number, slug?: string) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const allProducts = await getProducts(limit, offset, slug); // Obtiene todos los productos
          const paginatedProducts = allProducts.slice(offset, offset + limit); // Aplica el límite y el desplazamiento
          setProducts(paginatedProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [limit, offset, slug]);
  
    return { products, isLoading };
  };