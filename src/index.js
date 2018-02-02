import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export const initStore = () => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

