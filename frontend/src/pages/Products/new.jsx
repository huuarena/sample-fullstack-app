import { LegacyStack } from '@shopify/polaris'
import React from 'react'
import Header from '../../components/Header'

function NewPage(props) {
  return (
    <LegacyStack vertical alignment="fill">
      <Header title="Add new product" onBack={() => props.navigate('/products')} />
    </LegacyStack>
  )
}

export default NewPage
