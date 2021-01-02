import productData from './product.data';

const INITIAL_STATE = {
  collections: productData
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
