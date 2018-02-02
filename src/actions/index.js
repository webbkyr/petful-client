import { combineReducers } from 'redux';
import { catReducer } from '../reducers/cat';
import { dogReducer } from '../reducers/dog';
export * from './dog';
export * from './cat';


export const rootReducer = combineReducers({
  catReducer,
  dogReducer
})