// import React , { Component } from 'react';
// export default class Index extends Component {
//   render() {
//     return(
//       <MainLayout>
//         <h1>I'm Index.js</h1>
//       </MainLayout>
//     )
//   }
// }

import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import Counter from '../src/components/Counter/Counter'
import * as CounterActions from '../src/actions/counter'
import MainLayout from '../src/components/MainLayout'

const App = ({counters ,actions}) => (
  <MainLayout>
    <Counter value={counters.value}  incrementCounter={actions.incrementCounter} decrementCounter={actions.decrementCounter} />
  </MainLayout>
)

const mapStateToProps = state => ({
  counters: state.counters
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
})

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(App)


