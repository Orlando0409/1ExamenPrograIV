import { Product } from "../models/Products";

const apiUrl = "https://api.escuelajs.co/api/v1/products";

export async function getProducts(limit: number, offset: number, title?: string): Promise<Product[]> {
 
  const url = title
    ? `${apiUrl}?title=${encodeURIComponent(title)}&limit=${limit}&offset=${offset}`
    : `${apiUrl}?limit=${limit}&offset=${offset}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching products: ${response.statusText}`);
  }

  const products = await response.json();
  return products;
}

export async function getProductsByCategory(category?: string): Promise<Product[]> {
  const url = category
    ? `${apiUrl}?categorySlug=${encodeURIComponent(category)}`
    : apiUrl;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching products by category: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}