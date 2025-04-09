import { useState } from 'react';
import Show from './components/Show';
import Categories from './components/Categories';
import ListProducts from './components/ListProducts';
import Footer from './components/Footer';

function PageLayout() {
  const [limitPages, setLimitPages] = useState(5); // Estado inicial con 5 productos

  const handleFetch = (page: number) => {
    setLimitPages(page); // Actualiza el límite de productos
  };

  const handleReset = () => {
    setLimitPages(5); 
  };

  const handleLoadMore = () => {
    setLimitPages((prev) => prev*2); 
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
          <div className="category-buttons">
            <Categories />
          </div>
        </div>

        <div className="center-panel">
          <div className="filter-input">
            <input type="text" placeholder="Input field / Filter by title" />
          </div>

          <ListProducts limitPages={limitPages} />

          <Footer
            limitPages={limitPages} onReset={handleReset} onLoadMore={handleLoadMore} />
        </div>

        <div className="right-panel">
          <Show options={[5, 10, 15, 20]} onFetch={handleFetch} />
        </div>
      </div>
    </div>
  );
}

export default PageLayout;

