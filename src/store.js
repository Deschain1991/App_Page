import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/root.reducer';
import thunk from 'redux-thunk'

let middleware = [ thunk ]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store