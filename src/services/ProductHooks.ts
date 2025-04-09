import { useEffect, useState } from "react";
import { Product } from "../models/Products";
<<<<<<< HEAD
import { getProducts, getProductsByCategory } from "./ProductServices";
=======
import { getProducts, getProductsByCategory, getProductsByTitle } from "./ProductServices";
>>>>>>> origin/Karina-Final


export const useGetProductsFiltered = (categorySlug: string | null, selectedCategorySlug: string | null, limit: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
<<<<<<< HEAD
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
=======
        const filteredProducts = await getProductsByTitle(title); 
        setProducts(filteredProducts.slice(0, limit)); 
      
>>>>>>> origin/Karina-Final
        setIsLoading(false);

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
<<<<<<< HEAD
        try {
          const allProducts = await getProducts(limit, offset, slug); // Obtiene todos los productos
=======
        
          const allProducts = await getProducts(limit, offset); 
>>>>>>> origin/Karina-Final
          const paginatedProducts = allProducts.slice(offset, offset + limit); // Aplica el límite y el desplazamiento
          setProducts(paginatedProducts);
        
          setIsLoading(false);
        
      };
  
      fetchData();
    }, [limit, offset, slug]);
  
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