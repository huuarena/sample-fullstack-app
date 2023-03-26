import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@shopify/polaris'
import { useLocation, useNavigate } from 'react-router-dom'
import './styles.scss'

function AppNavigation(props) {
  const { routes } = props

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="AppNavigation">
      {routes.map((item, index) => (
        <div
          className={`Item ${
            (item.path === '/' && location.pathname === item.path) ||
            (item.path !== '/' && location.pathname.includes(item.path))
              ? `Item__selected`
              : ``
          }`}
          onClick={() => navigate(item.path)}
        >
          <div className="Icon">{item.icon && <Icon source={item.icon} />}</div>
          <div className="Label">{item.title}</div>
        </div>
      ))}
    </div>
  )
}

export default AppNavigation
