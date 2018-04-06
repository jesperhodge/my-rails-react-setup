import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home  from 'pages/home'
import SignIn from 'pages/signIn'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/sign_in' component={SignIn} />
      <Route path='/' component={Home} />
    </Switch>
  </main>
)

export default Main
