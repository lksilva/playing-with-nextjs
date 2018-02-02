import { createStore } from 'redux'
import reducer from './reducers'

export const initStore = () => {
  return createStore(reducer)
}

