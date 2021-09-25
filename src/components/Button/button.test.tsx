import React from 'react'
import { render, fireevent } from '@testing-library/react'
import button, {
  buttonprops,
  buttonsize,
  buttontype
} from './button'
// jest.fn() 创建出一个被监控的模拟函数

const defaultprops = {
  onclick: jest.fn(),
  btntype: 'default'
}

const testprops: buttonprops = {
  btntype: 'primary',
  size: 'lg',
  classname: 'names'
}

const disabledprops: buttonprops = {
  disabled: true,
  onclick: jest.fn()
}

describe('test button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(
      <button {...defaultprops}>nice</button>
    )
    const element = wrapper.getbytext('nice')
    expect(element).tobeinthedocument()
    expect(element.tagname).toequal('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(
      <Button {...testProps}>Nice</Button>
    )
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg names')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(
      <Button btnType='link' href='http//www.google.com'>
        Link
      </Button>
    )
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(
      <Button {...disabledProps}>Nice</Button>
    )
    const element = wrapper.getByText(
      'Nice'
    ) as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()

    // 因为是disabled属性，所以没有被点击
  })
})
