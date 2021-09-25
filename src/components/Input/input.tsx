import React from 'react'
import classNames from 'classnames'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Icon, ThemeProps } from '../Icon/icon'

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLElement>,
    'size'
  > {
  disabled?: boolean
  size?: 'lg' | 'sm' | 'default'
  icon?: IconName
  prefixs?: string | React.ReactElement
  append?: string | React.ReactElement
  theme?: ThemeProps
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
}

export const Input: React.FC<InputProps> = props => {
  // 取出各种的属性
  const {
    disabled,
    size,
    icon,
    prefixs,
    append,
    theme,
    ...restProps
  } = props
  // 根据属性计算的不同从className
  const classes = classNames('inputvalue', {
    [`input-${size}`]: size
  })
  const valueDefault = (value: any) => {
    if (value === undefined || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = valueDefault(restProps.value)
  }
  return (
    //根据属性判断是否要添加特定的节点
    <form className={classes}>
      {prefixs &&
        (typeof prefixs === 'string' ? (
          <label className='input-prefixs'>{prefixs}</label>
        ) : (
          { prefixs }
        ))}
      <input
        type='text'
        onChange={() => {}}
        className='input-group'
        {...restProps}
      />
      {icon && (
        <Icon
          icon={icon}
          theme={theme}
          className='input-icon'
        />
      )}
      {append &&
        (typeof append === 'string' ? (
          <label className='input-append'>{append}</label>
        ) : (
          { append }
        ))}
    </form>
  )
}
