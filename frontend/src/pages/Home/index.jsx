import { Stack } from '@shopify/polaris'
import React from 'react'
import AppHeader from '../../components/AppHeader'

function IndexPage(props) {
  return (
    <Stack vertical alignment="fill">
      <AppHeader title="Home" />
    </Stack>
  )
}

export default IndexPage
