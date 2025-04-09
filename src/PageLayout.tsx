import { useState } from 'react';
import Show from './components/Show';
import ListProducts from './components/ListProducts';
import Footer from './components/Footer';
import MinMaxPrice from './components/MinMaxPrice';
import CategoryButton from './components/CategoryButton';
import ProductProvider from './context/productProvider';
import InputTitle from './components/InputTitle';
import ProductFetcher from './services/ProductFetcher';

function PageLayout() {
  const [limitPages, setLimitPages] = useState(0); // Límite inicial de productos
  const [offset, setOffset] = useState(0); // Desplazamiento inicial

  const handleFetch = (count: number) => {
    setLimitPages(count); // Establece el límite de productos a cargar
    setOffset(0); // Restablece el desplazamiento cuando cambia el límite
  };

  const handleLoadMore = () => {
    setOffset((prev) => prev + limitPages); // Aumenta el desplazamiento según el límite actual
  };

  return (
    <ProductProvider>
      <div className="container">
        <ProductFetcher />
        <div className="main-content">
          <div className="left-panel">
            <span>Filter By Price Range</span>
            <MinMaxPrice />
            <span>Filter By Category</span>
            <CategoryButton />
          </div>

          <div className="center-panel">
            <div className="filter-input">
              <InputTitle />
            </div>

            <ListProducts />
            <Footer />
          </div>

          <div className="right-panel">
            <Show options={[5, 10, 15, 20]} onFetch={handleFetch} />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}

export default PageLayout;
