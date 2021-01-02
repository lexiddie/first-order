import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import { selectCollection } from '../../redux/product/product.selectors';

import './product-preview.styles.scss';

const ProductPreview = ({ match, collection }) => {
  //   const { name, price, imageUrl } = collection;
  console.log(`Checking Match`, match);
  console.log(`Checking Collection`, collection);
  return (
    <>
      {/* <div>
        <div className='collection-item'>
          <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className='collection-footer'>
            <span className='name'>{name}</span>
            <NumberFormat className='price' value={price} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
          </div>
        </div>
      </div> */}
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.productId)(state)
});

export default connect(mapStateToProps)(ProductPreview);
