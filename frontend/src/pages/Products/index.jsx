import { Stack } from '@shopify/polaris'
import React from 'react'
import AppHeader from '../../components/AppHeader'
import { CirclePlusOutlineMinor } from '@shopify/polaris-icons'

function IndexPage(props) {
  return (
    <Stack vertical alignment="fill">
      <AppHeader
        title="Products"
        actions={[
          {
            label: 'Add new product',
            icon: CirclePlusOutlineMinor,
            onClick: () => props.navigate('/products/new'),
            primary: true,
          },
        ]}
      />
    </Stack>
  )
}

export default IndexPage
