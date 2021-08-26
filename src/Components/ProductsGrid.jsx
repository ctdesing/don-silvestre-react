import ProductCard from './ProductCard'
import useProducts from '../store/products'
import image from '../assets/soap.jpg'
import './ProductsGrid.css'


const compose = (products) => {
  return products.map((product, i) => <ProductCard className="product" key={product.name + i} name={product.name} price={product.price} image={image} />)
}

const ProductsGrid = () => {
  const { getProducts } = useProducts()
  const { products } = getProducts()

  return (
    <div>
      <div className="products-title">
        <p>FEATURED PRODUCTS</p>
      </div>
      <section className="products">
        {compose(products)}
      </section>
    </div>
  )
}

export default ProductsGrid