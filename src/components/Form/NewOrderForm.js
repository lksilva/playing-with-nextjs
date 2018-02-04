import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'
import FormLayout from './FormLayout'
import MainLayout from '../MainLayout'
import styles from './form.scss'

export default class NewOrderForm extends Component {
  static propTypes = {
    errorMessage: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired
  }
  // company_name: 'DELVESYS',
  //   product_list: [{
  //     name: 'cerveja',
  //     amount: 15
  //   },{
  //     name: 'carvão',
  //     amount: 2
  //   },{
  //     name: 'carne',
  //     amount: 10
  //   }]
  state = {
    amount: '',
    currentCompany: '',
    product_list: []
  }

  handleInputsChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSelectChange = (event) => {
    this.setState({currentCompany: event.target.value});
  }

  sendOrder = () => {
    this.props.saveOrder(this.state);
  }

  createSelecCompany = (company, index) => <option key={index} value={company.fantasy_name}>{company.fantasy_name}</option>

  createCompanies = (companies) => {
    return (
      <select onChange={this.handleSelectChange}>
        <option value="" selected disabled hidden>Escolha uma empresa</option>
        {companies.map(this.createSelecCompany)}
      </select>
    )
  }

  render() {
    const { errorMessage, isFetching, companies } = this.props;

    return (
      <MainLayout removeHeader>
        <FormLayout>
          <h3>Novo Pedido</h3>
          <form className="width350">
            <Input name="amount" type="number" label="Quantidade" handleInput={this.handleInputsChange} />
            {this.createCompanies(companies)}
          </form>
          {!isFetching &&
            <span className="error">{errorMessage}</span>
          }
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
