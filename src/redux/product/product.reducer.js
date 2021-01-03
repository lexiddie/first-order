import productData from './product.data';

const INITIAL_STATE = {
  collections: productData,
  interests: [
    {
      rate: 0,
      month: 12
    },
    {
      rate: 4,
      month: 24
    },
    {
      rate: 8,
      month: 36
    }
  ]
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
