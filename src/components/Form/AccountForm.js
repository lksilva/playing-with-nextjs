import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'
import InputPassword from '../Input/InputPassword'
import FormLayout from './FormLayout'
import MainLayout from '../MainLayout'

export default class AccountForm extends Component {
  static propTypes = {
    createAccount: PropTypes.func.isRequired,
    userValid: PropTypes.bool.isRequired
  }

  state = {
    email: '',
    password: '',
    confirm_password: ''
  }

  handleInputsChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { userValid, isLoading, sendContact } = this.props;
    console.log(this.state);
    return (
      <MainLayout removeHeader>
        <FormLayout>
          <h3>Crie sua conta</h3>
          <form>
            <Input name="email" type="email" label="Email" handleInput={this.handleInputsChange} />
            <InputPassword name="password" label="Senha" handleInput={this.handleInputsChange} />
            <Input name="confirm_password" type="password" label="Confirmar sua senha" handleInput={this.handleInputsChange} />
          </form>
          {isLoading ?
            <h4>Enviando...</h4> :
            <Button click={sendContact} label="Criar Conta" />
          }
        </FormLayout>
      </MainLayout>
    )
  }
}
