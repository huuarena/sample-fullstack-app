import { LegacyCard, LegacyStack } from '@shopify/polaris'
import React from 'react'
import Header from '../../components/Header'
import Table from './Table'

function IndexPage(props) {
  const { countries } = props

  return (
    <LegacyStack vertical alignment="fill">
      <Header
        title="Countries"
        actions={[
          {
            label: 'Add new country',
            onClick: () => props.navigate('/countries/new'),
            primary: true,
          },
        ]}
      />

      <div>Total items: {countries?.totalItems || 'loading..'}</div>

      <LegacyCard>
        <Table
          {...props}
          items={countries?.items}
          onEdit={(item) => props.navigate(`countries/${item.id}`)}
          // onDelete={(item) => setDeleted(item)}
        />
      </LegacyCard>
    </LegacyStack>
  )
}

export default IndexPage
