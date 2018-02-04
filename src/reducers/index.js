import { combineReducers } from 'redux'
import account from './account';
import login from './login';
import dashboard from './dashboard';
import company from './company';

const rootReducer = combineReducers({
  account,
  login,
  dashboard,
  company
})

export default rootReducer
