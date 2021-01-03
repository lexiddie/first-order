import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import ProductPreview from '../../components/product-preview/product-preview.component';

import './product.styles.scss';

const Product = (props) => {
  const { match } = props;
  return (
    <>
      <div className='product'>
        <Route exact path={`${match.path}`} render={() => <Redirect from='*' to='/' />} />
        <Route path={`${match.path}/:productId`} component={ProductPreview} />
      </div>
    </>
  );
};

export default Product;
