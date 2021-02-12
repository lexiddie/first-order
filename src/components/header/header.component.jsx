import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../../assets/first-order.png';

import './header.styles.scss';

const Header = (props) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={Logo} alt='Logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        Home
      </Link>
      <Link className='option' to='/about'>
        About
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
    </div>
  </div>
);

export default connect()(Header);
