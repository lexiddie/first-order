import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import ProductPreview from '../../components/product-preview/product-preview.component';

const Product = (props) => {
  const { match } = props;
  console.log(`Checking Match`, match);
  return (
    <>
      <Route exact path={`${match.path}`} render={() => <Redirect from='*' to='/' />} />
      <Route path={`${match.path}/:productId`} component={ProductPreview} />
    </>
  );
};

export default Product;
