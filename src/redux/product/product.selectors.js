import { createSelector } from 'reselect';

const selectProduct = (state) => state.product;

export const selectCollections = createSelector([selectProduct], (product) => product.collections);

export const selectInterests = createSelector([selectProduct], (product) => product.interests);

export const selectCollection = (collectionId) =>
  createSelector([selectCollections], (collections) =>
    collections
      ? collections.filter((item) => {
          return item.id === collectionId;
        })[0]
      : null
  );
