import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import dotenv from 'dotenv';

import Home from './pages/home/home.component';
import Product from './pages/product/product.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';

import Header from './components/header/header.component';

import './App.scss';

dotenv.config();

const App = (props) => {
  const domain = process.env.DOMAIN;
  const lex = process.env.LEX;

  console.log('DOMAIN:', domain);
  console.log('LEX:', lex);

  return (
    <div className='main'>
      <Header />
      <Switch>
        <Route exact path='/first-order/' component={Home} />
        <Route path='/first-order/product' component={Product} />
        <Route path='/first-order/about' component={About} />
        <Route path='/first-order/contact' component={Contact} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
