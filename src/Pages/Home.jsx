import React from 'react'
import Modal from '../Components/Modal'
import TestimonialGrid from '../Components/TestimonialGrid'
import ProductsGrid from '../Components/ProductsGrid'
import './Home.css'

const Home = () => {
  return (
    <div id="home">
      <Modal />
      <TestimonialGrid />
      <ProductsGrid />
    </div>
  )
}

export default Home