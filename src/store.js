import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';
import { rootReducer } from './actions'

const enhancer = composeWithDevTools(applyMiddleware(thunk))

export default createStore(rootReducer, enhancer);