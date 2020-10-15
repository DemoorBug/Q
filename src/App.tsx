import React from 'react'
// import Button, {ButtonSize, ButtonType} from './components/Button/button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuitem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
library.add(fas)
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Icon theme='danger' icon='coffee' size='10x' />
        <Menu defaultIndex='0' onSelect={i => alert(i)}>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link 2</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
            <MenuItem>dropdown 3</MenuItem>
          </SubMenu>
          <MenuItem index='4'>cool link 3</MenuItem>
        </Menu>
      </header>
    </div>
  )
}

export default App
