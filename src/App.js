import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
// import { DotenvAzure } from 'dotenv-azure';
import dotenv from 'dotenv';
import { azureIdentity } from '@azure/identity';
import appConfig from '@azure/app-configuration';

import Home from './pages/home/home.component';
import Product from './pages/product/product.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';

import Header from './components/header/header.component';

import './App.scss';

// const main = async () => {
//   const dotenvAzure = new DotenvAzure();
//   await dotenvAzure.config();

//   // process.env now has the keys and values from the parsed result
//   console.log(process.env);
//   console.log(`Port: ${process.env.REACT_APP_PORT}`);
//   console.log(`Uri: ${process.env.REACT_APP_URI}`);
// };

dotenv.config();

const App = (props) => {
  // main();
  console.log(`PROCESS ENV`, process.env);
  console.log(`AppSettings`, process.env['AppSettings:REACT_APP_PORT']);

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
