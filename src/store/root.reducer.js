import { combineReducers } from 'redux';
import productReducer from './products.reducer';
//import productsReducer from './products.reducer'

const rootReducer = combineReducers({
    products: productReducer
})

export default rootReducer