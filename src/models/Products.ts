export interface Product {
   
    id: number;
    slug: string;
    price: number;
    category:{
        id: number;
        slug: string
    }
}


export const ProductsInitialState = {
    id: 0,
    slug: '',
    price: 0,
}
