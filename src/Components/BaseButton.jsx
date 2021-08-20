import React from 'react'
import { NavLink } from 'react-router-dom'
import './BaseButton.css'

const BaseButton = ({ link, to, mode, label, children }) => {
  const draw = () => {
    if (!link) return (<button className={`btn ${mode}`}>{label || children}</button>)
    else return (<NavLink to={to} className={`btn ${mode}`}> {label || children} </NavLink>)
  }

  return draw()
}

export default BaseButton