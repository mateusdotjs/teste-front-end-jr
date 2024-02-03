import Header from "./components/header/Header"
import './App.scss'
import Banner from "./components/banner/Banner"
import Categories from "./components/categories/Categories"
import Products from "./components/products/Products"
import ProductsSecondary from "./components/products-secondary/ProductsSecondary"
import Brands from "./components/brands/Brands"

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Products />
      <ProductsSecondary />
      <Brands />
    </>
  )
}

export default App