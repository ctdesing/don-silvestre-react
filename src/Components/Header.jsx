import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import BaseButton from './BaseButton'
import MenuItems from '../menuItems.js'
import './Header.css'

const Header = ({displayMenu}) => {
  
  const drawButtons = () => {
    return MenuItems.map((item) => {
      return <BaseButton key={item.label} mode="flat spaced" label={item.label} />
    })
  }

  return (
    <header>
      <div className="navbar">
        <p className="logo">don silvestre</p>
        <div className="nav-items">
          {drawButtons()}
        </div>
        <div>
          <BaseButton className="active-icon" mode="flat">
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </BaseButton>

          <BaseButton className="active-icon" mode="flat">
            <FontAwesomeIcon className="icon" icon={faUser} />
          </BaseButton>

          <BaseButton className="active-icon" mode="flat">
            <FontAwesomeIcon className="icon" icon={faShoppingCart}/>
          </BaseButton>

          <BaseButton className="active-icon" mode="flat" onClick={displayMenu}>
            <FontAwesomeIcon className="menu-icon icon" icon={faBars} />
          </BaseButton>
        </div>
      </div>
    </header>
  )
}

export default Header