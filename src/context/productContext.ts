import React, { useContext } from 'react';
import { Product } from '../models/Products';

type ProductContextType = {
    isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  limitPages: number;
  setLimitPages: (value: number) => void;
  searchTitle: string;
  setSearchTitle: (value: string) => void;
  minPrice?: number;
  setMinPrice: (value: number | undefined) => void;
  maxPrice?: number;
  setMaxPrice: (value: number | undefined) => void;
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
  filters: {
    minPrice?: number;
    maxPrice?: number;
    searchTitle: string;
    selectedCategory: string | null;
  };
  setFilters: (filters: {
    minPrice?: number;
    maxPrice?: number;
    searchTitle: string;
    selectedCategory: string | null;
  }) => void;
};

const ProductContext = React.createContext<ProductContextType | undefined>(undefined);

export default ProductContext;


export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
      throw new Error('useProductContext debe usarse dentro de un ProductProvider');
    }
    return context;
  };