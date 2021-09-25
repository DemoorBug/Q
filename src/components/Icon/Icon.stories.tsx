import React from 'react'
import { Icon, IconProps } from './icon'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'EXAMPLE/Icon',
  component: Icon
} as Meta

const Template: Story<IconProps> = args => <Icon {...args} />

export const IconIn = Template.bind({})
IconIn.args = {
  icon: 'angle-down',
  className: 'arrow-icon'
}
