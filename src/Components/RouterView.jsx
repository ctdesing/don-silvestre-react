import React from 'react'
import routes from '../routes'
import { Route, Switch } from 'react-router-dom'

const RouterView = () => {
  const compose = () => {
    return routes.map((r) => <Route exact path={r.path} 
      render={(props)=> <r.component {...props} />} 
      key={r.path}/>
    )
  }

  return (
    <Switch>
      {compose()}
    </Switch>
  )
}

export default RouterView