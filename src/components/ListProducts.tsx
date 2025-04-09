import { useGetProductsFiltered } from "../services/ProductHooks";

<<<<<<< HEAD
interface ListProductsProps {
  limitPages: number; // Límite de productos a mostrar
  searchTitle: string; // Título para filtrar los productos
  selectedCategorySlug: string | null; // Slug de la categoría seleccionada
}

const ListProducts: React.FC<ListProductsProps> = ({ limitPages, searchTitle, selectedCategorySlug }) => {
  const { products, isLoading } = useGetProductsFiltered(searchTitle, selectedCategorySlug, limitPages);
=======
type ListProductsType ={
  limitPages: number; 
  searchTitle: string; 
}

const ListProducts = ({ limitPages, searchTitle }:ListProductsType) => {
  const { products, isLoading } = useGetProductsByTitle(searchTitle, limitPages); // Filtra por título y aplica el límite
>>>>>>> origin/Karina-Final

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="results">
      {products.map((product) => (
        <div key={product.id} className="result-item">
          <div><strong>Title:</strong> {product.slug}</div>
          <div><strong>Price:</strong> {product.price}</div>
          <div><strong>Category:</strong> {product.category?.slug}</div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;