import React, { Component } from 'react'
import styles from './form.scss'

export default class FormCointainer extends Component {
  render() {
    return (
      <div className="containerApp">
        <div className="boxForm">
          {this.props.children}
        </div>
        <style jsx>{styles}</style>
      </div>
    )
  }
}
