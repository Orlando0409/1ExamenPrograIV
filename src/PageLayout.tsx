import { useState } from 'react';
import Show from './components/Show';
import ListProducts from './components/ListProducts';
import Footer from './components/Footer';
import MinMaxPrice from './components/MinMaxPrice';
import CategoryButton from './components/CategoryButton';

function PageLayout() {
  const [limitPages, setLimitPages] = useState(5); 
  const [searchTitle, setSearchTitle] = useState(''); // Estado para el filtro por título
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined); // Precio mínimo
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined); // Precio máximo
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Categoría seleccionada


  const handleFetch = (page: number) => {
    setLimitPages(page); 
  };

  const handleReset = () => {

    setLimitPages(5);
    setSearchTitle("");
    setMinPrice(undefined); // Limpia el filtro de precio mínimo
    setMaxPrice(undefined); // Limpia el filtro de precio máximo
    setSelectedCategory(null); // Limpia la categoría seleccionada

  };

  const handleLoadMore = () => {
    setLimitPages((prev) => prev + limitPages); 
  };


  return (
    <div className="container">

    <div className="main-content">
      <div className="left-panel">
        <span>Filter By Price Range</span>
        <MinMaxPrice
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
        />
     <span>Filter By Category</span>
          <CategoryButton onSelectCategory={setSelectedCategory} />

        </div>

        <div className="center-panel">
        <div className="filter-input">
            <input type="text" placeholder="Input field / Filter by title" value={searchTitle}
              onChange={(letra) => setSearchTitle(letra.target.value)} // Actualiza el estado del filtro
            />
          </div>


          <ListProducts limitPages={limitPages} searchTitle={searchTitle} minPrice={minPrice} maxPrice={maxPrice} selectedCategorySlug={selectedCategory}/>
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
