import { Product } from "../models/Products";

const apiUrl = 'https://api.escuelajs.co/api/v1/products';


export async function getProducts(limit: number, offset: number): Promise<Product[]> {
	const response = await fetch(apiUrl)
    const data = await response.json()
	return data;
}

export async function getProductsByCategory(category?: string): Promise<Product[]>{
    const response = await fetch('https://api.escuelajs.co/api/v1/products/?categorySlug='+ category);
    const data = await response.json();
    return data;
}