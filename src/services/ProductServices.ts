import { Product } from '../models/Products';
import { apiUrlProducts } from '../API/ApiUrl';


export async function getProducts(limit: number, offset: number, title?: string): Promise<Product[]> {
	const response = await fetch(`${apiUrlProducts}?title=${title}`);
    const data = await response.json()
	return data;
}

