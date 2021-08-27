import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import MainButton from './MainButton'
import MenuItems from '../menuItems.js'
import './Header.css'

const Header = ({displayMenu}) => {
  
  const drawButtons = () => {
    return MenuItems.map((item) => {
      return <MainButton key={item.label} mode="flat spaced" label={item.label} />
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
          <MainButton className="active-icon" mode="flat">
            <FontAwesomeIcon className="icon" icon={faSearch} />
          </MainButton>

          <MainButton className="active-icon" mode="flat">
            <FontAwesomeIcon className="icon" icon={faUser} />
          </MainButton>

          <MainButton className="active-icon" mode="flat">
            <FontAwesomeIcon className="icon" icon={faShoppingCart}/>
          </MainButton>

          <MainButton className="active-icon" mode="flat" onClick={displayMenu}>
            <FontAwesomeIcon className="menu-icon icon" icon={faBars} />
          </MainButton>
        </div>
      </div>
    </header>
  )
}

export default Header