import { LegacyStack } from '@shopify/polaris'
import React from 'react'
import Header from '../../components/Header'

function IndexPage(props) {
  return (
    <LegacyStack vertical alignment="fill">
      <Header
        title="Products"
        actions={[
          {
            label: 'Add new product',
            onClick: () => props.navigate('/products/new'),
            primary: true,
          },
        ]}
      />
    </LegacyStack>
  )
}

export default IndexPage
