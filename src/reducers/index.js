import { combineReducers } from 'redux'
import counters from './counter';
import account from './account';
import login from './login';

const rootReducer = combineReducers({
  counters,
  account,
  login
})

export default rootReducer
