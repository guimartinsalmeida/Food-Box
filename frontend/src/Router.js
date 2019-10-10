import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/404/NotFound.js'
import Plan from './components/Plan'
import Place from './components/home/Place'
import Signup from './components/home/Signup'
import Login from './components/home/Login'
import Edit from './components/home/Edit'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/plans" component={Plan} />
      <Route exact path="/places/:id" component={Place} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
