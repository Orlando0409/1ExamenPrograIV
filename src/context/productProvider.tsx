import React, { JSX, useState } from 'react';
import ProductContext from './productContext';
import { Product } from '../models/Products';

type ProductContextProviderType = {
  children: JSX.Element;
};

const ProductProvider = ({ children }: ProductContextProviderType) => {
    const [isLoading, setIsLoading] = useState(false);
  const [limitPages, setLimitPages] = useState(5);
  const [searchTitle, setSearchTitle] = useState('');
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const filters = { minPrice, maxPrice, searchTitle, selectedCategory };

  const setFilters = (filters: {
    minPrice?: number;
    maxPrice?: number;
    searchTitle: string;
    selectedCategory: string | null;
  }) => {
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
    setSearchTitle(filters.searchTitle);
    setSelectedCategory(filters.selectedCategory);
  };

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        setIsLoading,
        limitPages,
        setLimitPages,
        searchTitle,
        setSearchTitle,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedCategory,
        setSelectedCategory,
        products,
        setProducts,
        filters,
        setFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

