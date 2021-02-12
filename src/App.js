import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Product from './pages/product/product.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';

import Header from './components/header/header.component';

import './App.scss';

const App = (props) => {
  const port = process.env.REACT_APP_PORT;
  const uri = process.env.REACT_APP_URI;

  console.log('REACT_APP_PORT:', port);
  console.log('REACT_APP_URI:', uri);

  return (
    <div className='main'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/product' component={Product} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
