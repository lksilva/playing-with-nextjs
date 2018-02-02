import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './button.scss';

export default class Button extends Component {
  static propTypes = {
    click: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  }

  render() {
    const {click, label} = this.props;

    return (
      <div className="cofirmButton" onClick={click}>
        <span>
          {label}
        </span>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
