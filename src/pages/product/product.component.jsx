import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import ProductPreview from '../../components/product-preview/product-preview.component';

import './product.styles.scss';

const Product = (props) => {
  const { match } = props;
  console.log(`Checking Match`, match);
  return (
    <>
      <div className='product'>
        <Route exact path={`/first-order${match.path}`} render={() => <Redirect from='*' to='/' />} />
        <Route path={`/first-order${match.path}/:productId`} component={ProductPreview} />
      </div>
    </>
  );
};

export default Product;
