// import React from 'react'
// import { render } from 'react-dom'
import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import App from './containers/App'
import reducer from './reducers'
// import './global.scss';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const store = createStore(reducer)

// export default store;

export const initStore = () => {
  return createStore(reducer)
}


// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
