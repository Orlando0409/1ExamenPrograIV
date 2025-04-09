// src/components/PageLayout.tsx
import { useState } from 'react';
import Show from './components/Show';
import ListProducts from './components/ListProducts';
import Footer from './components/Footer';
import CategoryButton from './components/CategoryButton';
import CategoryContextProvider from './context/categoryContextProvider';  // Importamos el CategoryContextProvider
import { useCategory } from './services/CategoryHooks';

function PageLayout() {
  const [limitPages, setLimitPages] = useState(5); 
  const { setCategory } = useCategory(); 
  const [searchTitle, setSearchTitle] = useState(''); 

  const handleFetch = (page: number) => {
    setLimitPages(page); 
  };

  const handleReset = () => {
    setLimitPages(5); 
    setSearchTitle(''); 
    setCategory(''); 
  };

  const handleLoadMore = () => {
    setLimitPages((prev) => prev + limitPages); 
  };

  return (
    <CategoryContextProvider >
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
              <input
                type="text"
                placeholder="Input field / Filter by title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
              />
            </div>

            <ListProducts limitPages={limitPages} searchTitle={searchTitle} />

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
    </CategoryContextProvider>
  );
}

export default PageLayout;
