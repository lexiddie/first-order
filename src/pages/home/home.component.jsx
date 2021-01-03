import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const Home = (props) => {
  const { match } = props;
  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </>
  );
};

export default connect()(Home);
