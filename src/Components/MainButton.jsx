import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainButton.css'

const MainButton = ({ link, to, mode, label, children }) => {
  const draw = () => {
    if (!link) return (<button className={`btn ${mode}`}>{label || children}</button>)
    else return (<NavLink exact to={to} className={`btn ${mode}`}> {label || children} </NavLink>)
  }

  return draw()
}

export default MainButton