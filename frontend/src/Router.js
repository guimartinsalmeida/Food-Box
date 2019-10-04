import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/404/NotFound.js'
import Plan from './components/Plan'
import Place from './components/home/Place'
import Pedido from './components/home/Pedido'
import Profile from './components/home/Profile'
import Signup from './components/home/Signup'
import Login from './components/home/Login'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/plans" component={Plan} />
      <Route exact path="/places/:id" component={Place} />
      <Route exact path="/pedidoCreate/:id" component={Pedido} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
