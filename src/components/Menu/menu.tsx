import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuitem'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void
export interface MenuProps {
  defaultIndex: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: string
  onSelect?: SelectCallback
  mode?: MenuMode
}

export const MenuContext = createContext<IMenuContext>({
  index: '0'
})

const Menu: React.FC<MenuProps> = props => {
  const { className, defaultIndex, mode, style, children, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizont': mode !== 'vertical'
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleClick,
    mode
  }
  // 代码优化
  // 判断传入组件是否为MenuItem,其他组件均报错
  // 自动传入index值，还加了一步判断，自己传入index可修改传入值，否则index值传入后无效
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >
      let indented: string
      if (childElement.props.index) {
        indented = childElement.props.index
      }
      indented = String(index)
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: indented
        })
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component'
        )
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid='test'>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal'
}

export default Menu
