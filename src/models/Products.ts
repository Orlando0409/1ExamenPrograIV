export interface Product {
   
    id: number;
    slug: string;
    price: number;
<<<<<<< HEAD
=======
    category:{
        id: number;
        name: string
    }
>>>>>>> origin/Karina-Final
}


export const ProductsInitialState = {
    id: 0,
    slug: '',
    price: 0,
}
