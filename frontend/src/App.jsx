import React, { useEffect } from 'react'
import { Page } from '@shopify/polaris'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import routes from './routes'

function App(props) {
  const { actions } = props

  useEffect(() => console.log('store :>> ', props), [props])

  useEffect(() => {
    actions.getCountries()
  }, [])

  return (
    <Layout {...props}>
      <Page fullWidth={true}>
        <Routes>
          {/* Parent routes */}
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.component {...props} />} />
          ))}

          {/* Children routes */}
          {routes.map((item, index) =>
            item.childrens.length > 0
              ? item.childrens.map((_item, _index) => (
                  <Route key={_index} path={_item.path} element={<_item.component {...props} />} />
                ))
              : null
          )}
        </Routes>
      </Page>
    </Layout>
  )
}

export default App
