import { combineReducers } from 'redux'
import account from './account';
import login from './login';
import dashboard from './dashboard';
import company from './company';
import neworder from './neworder';

const rootReducer = combineReducers({
  account,
  login,
  dashboard,
  company,
  neworder
})

export default rootReducer
