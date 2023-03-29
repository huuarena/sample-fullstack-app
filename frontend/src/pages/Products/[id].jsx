import { LegacyStack } from '@shopify/polaris'
import React from 'react'
import Header from '../../components/Header'

function DetailPage(props) {
  return (
    <LegacyStack vertical alignment="fill">
      <Header title="DetailPage" onBack={() => props.navigate('/products')} />
    </LegacyStack>
  )
}

export default DetailPage
