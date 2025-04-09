import { useState } from 'react';
import Show from './components/Show';
import ListProducts from './components/ListProducts';
import Footer from './components/Footer';
import CategoryButton from './components/CategoryButton';

function PageLayout() {
  const [limitPages, setLimitPages] = useState(5); // Estado inicial con 5 productos
  const [increment, setIncrement] = useState(5); // Incremento dinámico basado en el valor seleccionado en Show

  const handleFetch = (page: number) => {
    setLimitPages(page); // Actualiza el límite de productos
    setIncrement(page); // Actualiza el incremento segun el valor seleccionado
  };

  const handleReset = () => {
    setLimitPages(5); // Resetea el límite a 5
    setIncrement(5); // Resetea el incremento a 5
  };

  const handleLoadMore = () => {
    setLimitPages((prev) => prev + increment); // Incrementa el límite según el valor actual de increment
  };

  return (
    <div className="container">
      <div className="main-content">
        <div className="left-panel">
          <span>Filter By Price Range</span>
          <div className="price-inputs">
            <input type="number" placeholder="Min Price" />
            <input type="number" placeholder="Max Price" />
          </div>

          <span>Filter By Category</span>
          <CategoryButton />
        </div>

        <div className="center-panel">
          <div className="filter-input">
            <input type="text" placeholder="Input field / Filter by title" />
          </div>

          <ListProducts limitPages={limitPages} />

          <Footer
            limitPages={limitPages}
            onReset={handleReset}
            onLoadMore={handleLoadMore}
          />
        </div>

        <div className="right-panel">
          <Show options={[5, 10, 15, 20]} onFetch={handleFetch} />
        </div>
      </div>
    </div>
  );
}

export default PageLayout;