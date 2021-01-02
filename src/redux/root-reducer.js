import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from './product/product.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whileList: []
};

const rootReducer = combineReducers({
  product: productReducer
});

export default persistReducer(persistConfig, rootReducer);
