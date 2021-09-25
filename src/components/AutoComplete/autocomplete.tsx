import React, { FC, InputHTMLAttributes } from 'react'

const a = ['1', 'abc', '']

interface AutoCompleteProps
  extends Omit<
    InputHTMLAttributes<HTMLElement>,
    'onSelect'
  > {
  fetchSuggestions: (
    keyword: string
  ) => string[] | Promise<string[]>
  onSelect: (item: string) => void
}

const handleChange = (keyword: string) => {
  return a.filter(item => item.includes(keyword))
  // return fetch('url?keyword=${keyword}')
}

const handleSelect = (item: string) => {
  console.log(item)
}

const AutoComplete: FC<AutoCompleteProps> = props => {
  const { fetchSuggestions, ...resetProps } = props

  //return <input type='text' {...resetProps} />
}
