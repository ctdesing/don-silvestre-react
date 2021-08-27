import './ProductCard.css'

const ProductCard = ({ name, price, image }) => {
  console.log(image)
  

  return (
    <div className="product-card">
      <img className="image" src={image} alt="product" />
      <p className="name">{ name }</p>
      <p className="price">${ price } USD</p>
    </div>
  )
}

export default ProductCard