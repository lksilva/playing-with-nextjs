import React, { Component } from 'react'
import Header from './Header/Header'
import PropTypes from 'prop-types'
import globalStyle from '../../styles/style.scss'

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        {!this.props.removeHeader && <Header />}
        {this.props.children}
        <style jsx global>
          {globalStyle}
        </style>
      </div>
    )
  }
}
