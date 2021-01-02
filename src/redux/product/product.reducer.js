import shopData from './product.data';

const INITIAL_STATE = {
  collections: shopData
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
