import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './input.scss';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    this.props.handleInput(event);
  }

  render() {
    const { type, label, name } = this.props;

    return (
      <div className="boxInput">
        <label>{label}</label>
        <input type={type} onChange={this.handleChange} name={name} ></input>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
