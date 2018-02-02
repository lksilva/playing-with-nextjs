import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './input.scss';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  render() {
    const { type, label } = this.props;

    return (
      <div className="boxInput">
        <label>{label}</label>
        <input type={type}></input>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
