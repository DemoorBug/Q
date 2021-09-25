import React, { useState } from 'react'
import { Input, InputProps } from './input'
// import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react/types-6-0'
// import '../../style/index.scss'

export default {
  title: 'Example/Input Component',
  component: Input
} as Meta

const InputTemplate: Story<InputProps> = args => {
  const [value, setValue] = useState('')
  return (
    <Input
      {...args}
      value={value}
      defaultValue={'234'}
      onChange={e => {
        setValue(e.target.value)
      }}
    />
  )
}

export const defaultInput = InputTemplate.bind({})
defaultInput.args = {
  size: 'lg',
  icon: 'angle-down',
  theme: 'danger',
  prefixs: 'www.',
  append: '@gmail.com'
}

// export const ButtonSmall = ButtonTemplate.bind({})
// ButtonSmall.args = {
//   size: ButtonSize.Small,
//   children: 'small'
// }

// export const ButtonPrimary = ButtonTemplate.bind({})
// ButtonPrimary.args = {
//   btnType: 'primary',
//   children: 'primary button'
// }
