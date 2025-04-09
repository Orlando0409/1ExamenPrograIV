import { Category } from '../models/Category';
import { apiUrlCategories } from '../API/ApiUrl';

export async function getProductsByCategory(slug?: string): Promise<Category[]> {
    const response = await fetch(`${apiUrlCategories}?slug=${slug}`);
    const categories = await response.json();
    return categories;
  }
