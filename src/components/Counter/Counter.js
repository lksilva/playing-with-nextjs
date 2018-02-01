import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import styles from './counter.scss';

export default class Counter extends Component {
  static propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  }

  increment = () => {
    this.props.incrementCounter()
  }

  decrement = () => {
    this.props.decrementCounter()
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <div>
          <h3>{this.props.value}</h3>
          <div>
            <button onClick={this.increment}>Adicionar</button>
            <button onClick={this.decrement}>Diminuir</button>
          </div>
        </div>
      </div>
    )
  }
}
