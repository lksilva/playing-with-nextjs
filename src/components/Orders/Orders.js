import React, { Component } from 'react'
import ordersStyles from './orders.scss'
import PropTypes from 'prop-types'

export default class Orders extends Component {

  static propTypes = {
    company: PropTypes.string.isRequired,
    orders: PropTypes.array.isRequired
  }

  createItem = (item) => {
    return (
      <tr key={item.id}>
        <th>{item.id}</th>
        <th>{item.product_list.map( (i, index) => {
          return(
            <div key={index}>
            {i.amount}x {i.name}
            <br />
            </div>
          )
        })}</th>
        <th>Cancelar</th>
        <style jsx>{ordersStyles}</style>
      </tr>
    )
  }

  createOrders = (orders) => {
    if (!!orders.length) {
      return (
        <table>
          <tbody>
            <tr>
              <th>Código</th>
              <th>Items</th>
              <th>Ação</th>
            </tr>
            {orders.map(this.createItem)}
          </tbody>
          <style jsx>{ordersStyles}</style>
        </table>
      )
    }
  }

  render() {
    const { company, orders } = this.props;
    const ordersByCompany = orders.filter(o => o.company_name === company);
    return (
      <div className="container">
        <h1>Pedidos: {company}</h1>
        {this.createOrders(ordersByCompany)}
        <style jsx>{ordersStyles}</style>
      </div>
    )
  }
}
