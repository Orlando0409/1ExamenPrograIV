import { Product } from '../types/ProductTypes';
import { Category } from '../';
const apiUrlProducts = 'https://api.escuelajs.co/api/v1/products';
const apiUrlCategories = 'https://api.escuelajs.co/api/v1/categories';


export async function getProducts(limit: number, offset: number, title?: string): Promise<Product[]> {
	const response = await fetch(`${apiUrlProducts}?title=${title}`);
    const data = await response.json()
	return data;
}

export async function getProductsByCategory(slug?: string): Promise<Category[]> {
    const response = await fetch(`${apiUrlCategories}?slug=${slug}`);
    const categories = await response.json();
    return categories;
  }
