import React, { Component } from 'react'
import Header from './Header/Header'
import globalStyle from '../../styles/style.scss'

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <style jsx global>
          {globalStyle}
        </style>
      </div>
    )
  }
}
