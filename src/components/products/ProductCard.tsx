import './productCard.scss'
import { ProductType } from "./Products"

const ProductCard = ({productName, descriptionShort, photo, price} : ProductType) => {
  const formatCurrency = (value: number) => {
   return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      value,
    )
  }

  return (
    <div className='product'>
      <img src={photo} />
      <h4 className='product-name light font-15'>{productName}</h4>
      <p className='product-deal regular font-16'>{formatCurrency(price)}</p>
      <p className='product-price bold font-20'>{formatCurrency(price)}</p>
      <p className='product-payment regular font-12'>ou 2x de R$ {formatCurrency(price/2)} sem juros</p>
      <p className='product-freight regular font-12 color-main'>Frete grátis</p>
      <button className='product-button font-14 bold'>
        Comprar
      </button>
    </div>
  )
}

export default ProductCard