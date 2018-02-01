import React, { Component } from 'react'
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export default class MainLayout extends Component {
  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
