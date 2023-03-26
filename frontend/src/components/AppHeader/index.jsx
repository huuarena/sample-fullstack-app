import { Button, DisplayText, Stack } from '@shopify/polaris'
import PropTypes from 'prop-types'
import { ArrowLeftMinor } from '@shopify/polaris-icons'

AppHeader.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  onBack: PropTypes.func,
}

AppHeader.defaultProps = {
  title: '',
  actions: [],
  onBack: undefined,
}

function AppHeader(props) {
  const { title, actions, onBack } = props

  return (
    <Stack>
      {onBack && <Button icon={ArrowLeftMinor} onClick={onBack} />}
      <Stack.Item fill>
        {typeof title === 'string' ? <DisplayText size="small">{title}</DisplayText> : title}
      </Stack.Item>
      <Stack distribution="trailing">
        {actions.map((item, index) => (
          <Button key={index} {...item}>
            {item.label}
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}

export default AppHeader
