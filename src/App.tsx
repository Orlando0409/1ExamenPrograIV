import './App.css'
import ProductProvider from './context/productProvider'
import PageLayout from './PageLayout'

function App() {
  return (
    <ProductProvider>
      <PageLayout/>
    </ProductProvider>
  )
}

export default App
