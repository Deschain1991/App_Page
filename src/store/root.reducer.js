import { combineReducers } from 'redux';
import commentsReducer from './comments.reducer';
import productReducer from './products.reducer';
import sortReducer from './sort.reducer';

const rootReducer = combineReducers({
    products: productReducer,
    sort : sortReducer,
    comment : commentsReducer,
})

//const comment = rootReducer.comment
//console.log(comment)

export default rootReducer