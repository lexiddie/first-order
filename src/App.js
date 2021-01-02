import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/home/home.component';
import Product from './pages/product/product.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';

import Header from './components/header/header.component';

import './App.scss';

class App extends React.Component {
  componentWillUnmount() {}

  render() {
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
  }
}

export default connect()(App);
