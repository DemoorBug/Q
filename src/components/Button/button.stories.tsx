import React from 'react'
import Button, { ButtonSize, ButtonType, ButtonProps } from './button'
// import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/react/types-6-0'
// import '../../style/index.scss'

export default {
  title: 'Button Component',
  component: Button
} as Meta

const ButtonTemplate: Story<ButtonProps> = args => <Button {...args}></Button>

export const defaultButton = ButtonTemplate.bind({})

defaultButton.args = {
  size: ButtonSize.Large,
  children: 'hello'
}

defaultButton.storyName = '默认 Button'

const buttonWithSize: Story<ButtonProps> = args => (
  <>
    <Button {...args}>large button</Button>
    <Button {...args}>small button</Button>
  </>
)

export const ButtonWithSize = buttonWithSize.bind({})

ButtonWithSize.args = {
  size: ButtonSize.Large
}
ButtonWithSize.storyName = '不同尺寸的 Button'

export const buttonWithType = () => (
  <>
    <Button btnType={ButtonType.Primary}>primary button</Button>
    <Button btnType={ButtonType.Danger}>Danger button</Button>
    <Button btnType={ButtonType.Link}>Link button</Button>
    <Button btnType={ButtonType.Default}>Default button</Button>
  </>
)
