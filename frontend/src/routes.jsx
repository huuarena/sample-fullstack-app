import Home from './pages/Home'

import Product from './pages/Products'
import ProductNew from './pages/Products/new'
import ProductDetail from './pages/Products/[id]'

import Country from './pages/Countries'
import CountryNew from './pages/Countries/new'
import CountryDetail from './pages/Countries/[id]'

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
    path: '/countries',
    title: 'Countries',
    exact: true,
    component: Country,
    icon: ProductsMinor,
    childrens: [
      {
        path: '/countries/new',
        title: 'New country',
        exact: true,
        component: CountryNew,
        icon: undefined,
        childrens: [],
      },
      {
        path: '/countries/:id',
        title: 'Edit country',
        exact: true,
        component: CountryDetail,
        icon: undefined,
        childrens: [],
      },
    ],
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
        title: 'Edit product',
        exact: true,
        component: ProductDetail,
        icon: undefined,
        childrens: [],
      },
    ],
  },
]
