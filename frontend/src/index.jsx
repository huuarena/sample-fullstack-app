import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import enTranslations from '@shopify/polaris/locales/en.json'
import { AppProvider, Frame } from '@shopify/polaris'

import './global.scss'
import '@shopify/polaris/build/esm/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <AppProvider i18n={enTranslations}>
      <Frame>
        <App />
      </Frame>
    </AppProvider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
