import React from 'react'
import { useParams } from 'react-router-dom'

const CatchAll = () => {
  const {catchAll} = useParams();

  return (<h1>{catchAll}</h1>)
}

export default CatchAll