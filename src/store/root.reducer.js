import { combineReducers } from 'redux';
import productReducer from './products.reducer';
import sortReducer from './sort.reducer';

const rootReducer = combineReducers({
    products: productReducer,
    sort : sortReducer
})

export default rootReducer