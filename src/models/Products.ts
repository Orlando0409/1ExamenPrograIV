export interface Product {
   
    id: number;
    slug: string;
    price: number;
}


export const ProductsInitialState = {
    id: 0,
    slug: '',
    price: 0,
}
