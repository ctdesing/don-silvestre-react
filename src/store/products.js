import mockProducts from '../mockProducts'

const state = {
  products: [...mockProducts]
}

const useProducts = () => {

  const getProducts = () => state

  const addProduct = (payload) => {
    state.products.push(payload)
  }

  return {getProducts, addProduct}

}

export default useProducts