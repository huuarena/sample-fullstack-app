import { Page } from '@shopify/polaris'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import routes from './routes'

function App(props) {
  const location = useLocation()
  const navigate = useNavigate()

  const appProps = { ...props, location, navigate }

  return (
    <Layout {...appProps} routes={routes}>
      <Page fullWidth={true}>
        <Routes>
          {/* Parent routes */}
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.component {...appProps} />} />
          ))}

          {/* Children routes */}
          {routes.map((item, index) =>
            item.childrens.length > 0
              ? item.childrens.map((_item, _index) => (
                  <Route
                    key={_index}
                    path={_item.path}
                    element={<_item.component {...appProps} />}
                  />
                ))
              : null
          )}
        </Routes>
      </Page>
    </Layout>
  )
}

export default App
