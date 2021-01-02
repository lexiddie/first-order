import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';

const Home = (props) => {
  const { match } = props;
  return (
    <>
      <div>
        <Route path={`${match.path}`} component={CollectionsOverview} />
        {/* <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} /> */}
      </div>
    </>
  );
};

export default connect()(Home);
