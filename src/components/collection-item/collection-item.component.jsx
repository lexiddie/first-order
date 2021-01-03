import React from 'react';
import { withRouter } from 'react-router-dom';
import NumberFormat from 'react-number-format';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, history }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <NumberFormat className='price' value={price} displayType={'text'} thousandSeparator={true} prefix={'฿'} />
      </div>
      <CustomButton onClick={() => history.push(`product/${id}`)} inverted>
        Preview
      </CustomButton>
    </div>
  );
};

export default withRouter(CollectionItem);
