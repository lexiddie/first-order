import React from 'react';

const InterestButton = ({ children, current, selected, ...otherProps }) => (
  <button className={`${current === selected ? 'active' : ''}`} {...otherProps}>
    {children}
  </button>
);

export default InterestButton;
