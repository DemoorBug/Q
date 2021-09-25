import React from 'react'
import { Button, ButtonProps } from './button'
// import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react/types-6-0'
// import '../../style/index.scss'

export default {
  title: 'Example/Button Component',
  component: Button
} as Meta

const ButtonTemplate: Story<ButtonProps> = args => (
  <Button {...args} />
)

export const defaultButton = ButtonTemplate.bind({})
defaultButton.args = {
  size: 'lg',
  children: 'hello'
}

// export const ButtonSmall = ButtonTemplate.bind({})
// ButtonSmall.args = {
//   size: ButtonSize.Small,
//   children: 'small'
// }

export const ButtonPrimary = ButtonTemplate.bind({})
ButtonPrimary.args = {
  btnType: 'primary',
  children: 'primary button'
}
