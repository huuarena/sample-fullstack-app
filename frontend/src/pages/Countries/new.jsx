import { LegacyStack } from '@shopify/polaris'
import React from 'react'
import Header from '../../components/Header'

function NewPage(props) {
  return (
    <LegacyStack vertical alignment="fill">
      <Header title="Add new country" onBack={() => props.navigate('/countries')} />
    </LegacyStack>
  )
}

export default NewPage
