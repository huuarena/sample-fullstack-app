import PropTypes from 'prop-types'
import { ActionList, Button, DataTable, Popover, LegacyStack } from '@shopify/polaris'
import { MobileVerticalDotsMajor, ImagesMajor } from '@shopify/polaris-icons'
import { useState } from 'react'

Table.propTypes = {
  items: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
}

Table.defaultProps = {
  items: undefined,
  onEdit: () => null,
  onDelete: () => null,
}

function Table(props) {
  const { items, onEdit, onDelete } = props

  const [selected, setSelected] = useState(null)

  let rows = []
  if (items?.length > 0) {
    rows = items.map((item, index) => [
      index + 1,
      <h3>
        <b>{item.name}</b>
      </h3>,
      <LegacyStack distribution="trailing">
        <Popover
          active={item.id === selected?.id}
          activator={
            <Button
              plain
              onClick={() => setSelected(selected?.id === item.id ? null : item)}
              icon={MobileVerticalDotsMajor}
            />
          }
          onClose={() => setSelected(null)}
        >
          <ActionList
            actionRole="menuitem"
            items={[
              {
                content: 'Edit',
                onAction: () => onEdit(item) & setSelected(null),
              },
              {
                content: 'Delete',
                onAction: () => onDelete(item) & setSelected(null),
              },
            ]}
          />
        </Popover>
      </LegacyStack>,
    ])
  }

  return (
    <DataTable
      headings={['No.', 'Name', 'Actions']}
      columnContentTypes={['text', 'text', 'numeric']}
      rows={rows}
      footerContent={items ? (items?.length > 0 ? undefined : 'Have no data') : 'loading..'}
    />
  )
}

export default Table
