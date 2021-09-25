import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input, InputProps } from './input'

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: 'test-input'
}

describe('test Input component', () => {
  it('should render the correct default Input', () => {
    const wrapper = render(<Input {...defaultProps} />)
    const testNode = wrapper.getByPlaceholderText(
      'test-input'
    ) as HTMLInputElement
    expect(testNode).toBeInTheDocument()
    fireEvent.change(testNode, { target: { value: '23' } })
    expect(defaultProps.onChange).toHaveBeenCalled()
    expect(testNode.value).toEqual('23')
  })
  it('should render the disabled Input on disabled property', () => {
    const wrapper = render(
      <Input disabled placeholder='disabled' />
    )
    const testNode = wrapper.getByPlaceholderText(
      'disabled'
    ) as HTMLInputElement
    expect(testNode.disabled).toBeTruthy
  })
  it('should render different input sizes on size property', () => {
    const wrapper = render(
      <Input placeholder='sizes' size='lg' />
    )
    const testContainer = wrapper.container.querySelector(
      '.inputvalue'
    )
    expect(testContainer).toHaveClass('input-lg')
  })
  it('sould render prepand and append element on prepand/append property', () => {
    const { queryByText, container } = render(
      <Input
        placeholder='pend'
        prefixs='www'
        append='@gmail.com'
      />
    )
    const testContainer = container.querySelector(
      '.inputvalue'
    )
    expect(queryByText('www')).toBeInTheDocument()
    expect(queryByText('@gmail.com')).toBeInTheDocument()
  })
})
