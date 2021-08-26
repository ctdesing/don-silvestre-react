import React from 'react'
import { useState } from 'react'

 let last = 3;

const CatchAll = ({history, match}) => {
  const [timer, setTimer] = useState(3)

  const timeout = setTimeout(() => {
    if (last > 0) {
      last = timer - 1
      console.log(last, timer)
      setTimer(timer-1)
    }
  }, 1000)

  const returnWhenReady = () => {
    if (timer === 0) {
      clearTimeout(timeout)
      history.replace('/')
    }
  }


  return (
    <div style={{textAlign: 'center', margin: '10rem 0'}}>
      <h1>Sorry, {match.url} doesn't exist. Returning home in {timer}</h1>
      {returnWhenReady()}
    </div>
  )
}

export default CatchAll