import { Product } from '../models/Products';
import { apiUrlProducts } from '../API/ApiUrl';


export async function getProducts(limit: number, offset: number, title?: string): Promise<Product[]> {
	const response = await fetch(`${apiUrlProducts}?title=${title}`);
    const data = await response.json()
	return data;
}

<<<<<<< HEAD
=======
export async function getProductsByTitle(title?: string): Promise<Product[]>{
    const response = await fetch(`${apiUrl}?title=${title}`);
    const products = await response.json();
    return products;
}

export async function getProductsByCategory(category?: string): Promise<Product[]>{
    const response = await fetch('https://api.escuelajs.co/api/v1/products/?categorySlug='+ category);
    const data = await response.json();
    return data;
}
>>>>>>> origin/Karina-Final
