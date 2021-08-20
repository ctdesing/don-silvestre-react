const ProductCard = ({ name, price, image }) => {
  return (
    <div>
      <img class="image" src={image} alt="image" />
      <p class="name">{ name }</p>
      <p class="price">${ price } USD</p>
    </div>
  )
}