import React, { Component } from 'react'
import dashboardStyles from './dashboard.scss'
import PropTypes from 'prop-types'

export default class Dashboard extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    companies: PropTypes.array.isRequired,
    orders: PropTypes.array.isRequired
  }

  createItem = (item) => {
    return (
      <tr key={item.cnpj}>
        <th>{item.fantasy_name}</th>
        <th>{item.cnpj}</th>
        <style jsx>{dashboardStyles}</style>
      </tr>
    )
  }

  createCompanies = (companies) => {
    if (!!companies.length) {
      return (
        <table>
          <tbody>
            <tr>
              <th>Nome Fantasia</th>
              <th>CNPJ</th>
              <th>Quantidade de pedidos</th>
            </tr>
            {companies.map(this.createItem)}
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
        {this.createCompanies(companies)}
        <style jsx>{dashboardStyles}</style>
      </div>
    )
  }
}

