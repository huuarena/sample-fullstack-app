import { Stack } from '@shopify/polaris'
import AppNavigation from '../AppNavigation'

function Layout(props) {
  const { children, routes } = props

  return (
    <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
      <AppNavigation routes={routes} />
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )
}

export default Layout
