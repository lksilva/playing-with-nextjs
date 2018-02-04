import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'
import FormLayout from './FormLayout'
import MainLayout from '../MainLayout'
import styles from './form.scss'

export default class CompanyForm extends Component {
  static propTypes = {
    errorMessage: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  state = {
    fantasy_name: '',
    cnpj: '',
  }

  handleInputsChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  sendcompany = () => {
    this.props.saveCompany(this.state);
  }

  render() {
    const { errorMessage, isFetching } = this.props;

    return (
      <MainLayout removeHeader>
        <FormLayout>
          <h3>Cadastrar Empresa</h3>
          <form className="width350">
            <Input name="fantasy_name" type="text" label="Nome Fantasia" handleInput={this.handleInputsChange} />
            <Input name="cnpj" type="text" label="CNPJ" handleInput={this.handleInputsChange} />
          </form>
          { !isFetching &&
            <span className="error">{errorMessage}</span>
          }
          {isFetching ?
            <h4>Validando...</h4> :
            <div>
              <Button click={this.sendcompany} label="Cadastrar" />
            </div>
          }
        </FormLayout>
        <style jsx>{styles}</style>
      </MainLayout>
    )
  }
}
