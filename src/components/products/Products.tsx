import "./products.scss"
import Title from "../Title"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import LinkCard from "../LinkCard"

export type ProductType = {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

const Products = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null)

  useEffect(() => {
    const getProducts = async () => {
      const url = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
      try {
        const response = await fetch(url)
        const data = await response.json()
        if (!data.success) {
          throw new Error('Erro ao recuperar dados de produtos.')
        }
        setProducts(data.products)
      } catch (error) {
        alert(error)
        console.log(error)
        setProducts(null)
      }
    }

    getProducts()
  }, [])

  return (
    <section className="container">
      <Title title="Produtos relacionados" decoration={true} />
      <ul className="products-categories">
        <li>celular</li>
        <li>acessórios</li>
        <li>tablets</li>
        <li>notebooks</li>
        <li>TVs</li>
        <li>Ver todos</li>
      </ul>
      <div>
        <ul className="products-container">
          {products && products.map((product) => {
            return (
              <li>
                <ProductCard
                  productName={product.productName}
                  descriptionShort={product.descriptionShort}
                  photo={product.photo}
                  price={product.price}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="products-partners">
        <LinkCard />
        <LinkCard />
      </div>
    </section>
  )
}

export default Products