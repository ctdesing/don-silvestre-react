import Home from './Pages/Home'
import Product from './Pages/Product'
import CatchAll from './Pages/CatchAll'

const routes = [
  { path: '/', component: Home},
  { path: '/products/:id', component: Product },
  { path: '/:{catchAll}', component: CatchAll }
]

export default routes