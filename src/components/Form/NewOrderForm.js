import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import FormLayout from './FormLayout'
import MainLayout from '../MainLayout'
import styles from './form.scss'
import { productsName, ArrayPush, GenerateToken } from '../../utils/helpers'

export default class NewOrderForm extends Component {
  static propTypes = {
    errorMessage: PropTypes.string.isRequired,
    inserted: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  state = {
    amount: '',
    currentCompany: '',
    currentProduct: '',
    product_list: []
  }

  resetProductList = () => {
    this.setState({ product_list: [] })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.inserted) {
      this.resetProductList();
    }
  }

  handleInputsChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSelectChange = (event) => {
    this.setState({ currentCompany: event.target.value });
  }

  handleSelectProductChange = (event) => {
    this.setState({ currentProduct: event.target.value })
  }

  sendOrder = () => {
    const payload = Object.assign({}, {
      id: GenerateToken(10),
      company_name: this.state.currentCompany,
      product_list: this.state.product_list
    })
    this.props.saveOrder(payload);
  }

  addProductOrder = (e) => {
    e.preventDefault();
    const product = Object.assign({}, { name: this.state.currentProduct, amount: this.state.amount });
    this.setState({ product_list: ArrayPush(this.state.product_list, product) })
  }

  createSelecCompany = (company, index) => <option key={index} value={company.fantasy_name}>{company.fantasy_name}</option>

  createCompanies = (companies) => {
    return (
      <select onChange={this.handleSelectChange}>
        <option value="" selected disabled hidden>Escolha uma empresa</option>
        {companies.map(this.createSelecCompany)}
        <style jsx>{styles}</style>
      </select>
    )
  }

  createSelectProduct = (product, index) => <option key={index} value={product}>{product}</option>

  createProducts = (products) => {
    return (
      <select onChange={this.handleSelectProductChange}>
        <option value="" selected disabled hidden>Selecione um produto</option>
        {products.map(this.createSelectProduct)}
        <style jsx>{styles}</style>
      </select>
    )
  }

  createItemShopp = (item, index) => {
    return (
      <tr key={index}>
        <th>{item.name}</th>
        <th>{item.amount}</th>
        <style jsx>{styles}</style>
      </tr>
    )
  }

  createShopping = (productList) => {
    if (!!productList.length) {
      return (
        <table>
          <tbody>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
            </tr>
            {productList.map(this.createItemShopp)}
          </tbody>
          <style jsx>{styles}</style>
        </table>
      )
    }
  }

  render() {
    const { errorMessage, isFetching, companies, inserted } = this.props;

    return (
      <MainLayout removeHeader>
        <FormLayout>
          <h3>Novo Pedido</h3>
          <form className="width350">
            <div className="productBox">
              {this.createProducts(productsName)}
              <b>Qtd</b>
              <input name="amount" type="number" onChange={this.handleInputsChange} />
              <button onClick={this.addProductOrder}>Add</button>
            </div>
            {this.createCompanies(companies)}
          </form>
          {!isFetching &&
            <span className="error">{errorMessage}</span>
          }
          {!isFetching && inserted &&
            <span className="sucess">Pedido salvo com sucesso</span>
          }
          <div className="shoppingList">
            {this.createShopping(this.state.product_list)}
          </div>
          {isFetching ?
            <h4>Validando...</h4> :
            <div>
              <Button click={this.sendOrder} label="Finalizar pedido" />
            </div>
          }
        </FormLayout>
        <style jsx>{styles}</style>
      </MainLayout>
    )
  }
}
