import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Plan from './components/Plan'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/plans" component={Plan}/>
      
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
