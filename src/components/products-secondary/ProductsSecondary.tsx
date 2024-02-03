import './productsSecondary.scss'
import LinkCard from '../LinkCard'
import Title from '../Title'

const ProductsSecondary = () => {
    return (
        <section className='container'>
            <Title title="Produtos relacionados" decoration={true} />
            <p className='products-sec-all bold font-15'>Ver todos</p>
            <div className="products-sec-partners">
                <LinkCard />
                <LinkCard />
            </div>
        </section>
    )
}

export default ProductsSecondary