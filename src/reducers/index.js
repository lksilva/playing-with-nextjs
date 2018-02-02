import { combineReducers } from 'redux'
import counters from './counter';
import account from './account';

const rootReducer = combineReducers({
  counters,
  account
})

export default rootReducer
