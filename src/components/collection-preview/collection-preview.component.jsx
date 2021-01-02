import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ collections, history, match }) => (
  <div className='collection-preview'>
    <h1 className='title' onClick={() => history.push(`${match.path}`)}>
      Watches
    </h1>
    <div className='preview'>
      {collections.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
