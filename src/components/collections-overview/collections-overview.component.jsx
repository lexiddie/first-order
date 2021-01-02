import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/product/product.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  console.log(`Checking Collections`, collections);
  return (
    <div className='collections-overview'>
      <CollectionPreview collections={collections}></CollectionPreview>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
