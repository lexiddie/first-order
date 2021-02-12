import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Product from './pages/product/product.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';

import Header from './components/header/header.component';

import './App.scss';

const App = (props) => {
  const domain = process.env.DOMAIN;
  const lex = process.env.LEX;

  console.log('DOMAIN:', domain);
  console.log('LEX:', lex);

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
