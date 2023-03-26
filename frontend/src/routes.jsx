import Home from './pages/Home'
import Product from './pages/Products'
import ProductNew from './pages/Products/new'
import ProductDetail from './pages/Products/[id]'
import { HomeMinor, ProductsMinor } from '@shopify/polaris-icons'

export default [
  {
    path: '/',
    title: 'Home',
    exact: true,
    component: Home,
    icon: HomeMinor,
    childrens: [],
  },
  {
    path: '/products',
    title: 'Products',
    exact: true,
    component: Product,
    icon: ProductsMinor,
    childrens: [
      {
        path: '/products/new',
        title: 'New product',
        exact: true,
        component: ProductNew,
        icon: undefined,
        childrens: [],
      },
      {
        path: '/products/:id',
        title: 'New product',
        exact: true,
        component: ProductDetail,
        icon: undefined,
        childrens: [],
      },
    ],
  },
]
