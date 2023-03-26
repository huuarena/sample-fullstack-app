import { Stack } from '@shopify/polaris'
import React from 'react'
import AppHeader from '../../components/AppHeader'

function NewPage(props) {
  return (
    <Stack vertical alignment="fill">
      <AppHeader title="Add new product" onBack={() => props.navigate('/products')} />
    </Stack>
  )
}

export default NewPage
