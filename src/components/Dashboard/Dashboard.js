import React, { Component } from 'react'
import dashboardStyles from './dashboard.scss'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class Dashboard extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    companies: PropTypes.array.isRequired,
    orders: PropTypes.array.isRequired
  }

  createItem = (item, orders) => {
    const order = orders.filter(o => o.company_name === item.fantasy_name);

    return (
      <tr key={item.cnpj}>
        <th>{item.fantasy_name}</th>
        <th>{item.cnpj}</th>
        {order.length ?
          <th>
            <Link href={{ pathname: '/orders-list', query: { company: item.fantasy_name } }}>
              <a className="menuLink">{order.length}</a>
            </Link>
          </th>
          :
          <th>Nenhum</th>
        }
        <style jsx>{dashboardStyles}</style>
      </tr>
    )
  }

  createCompanies = (companies, orders) => {
    if (!!companies.length) {
      return (
        <table>
          <tbody>
            <tr>
              <th>Nome Fantasia</th>
              <th>CNPJ</th>
              <th>Quantidade de pedidos</th>
            </tr>
            {companies.map(item => this.createItem(item, orders))}
          </tbody>
          <style jsx>{dashboardStyles}</style>
        </table>
      )
    }
  }

  render() {
    const { companies, orders } = this.props;

    return (
      <div className="container">
        {this.createCompanies(companies, orders)}
        <style jsx>{dashboardStyles}</style>
      </div>
    )
  }
}

