import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'
import InputPassword from '../Input/InputPassword'
import FormLayout from './FormLayout'
import MainLayout from '../MainLayout'
import styles from './form.scss'
import { AllPropertiesFilled } from '../../utils/helpers'

export default class AccountForm extends Component {
  static propTypes = {
    sendContact: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    inserted: PropTypes.bool.isRequired
  }

  state = {
    email: '',
    password: '',
    confirm_password: ''
  }

  resetForm = () => {
    this.setState({
      email: '',
      password: '',
      confirm_password: ''
    })
  }

  handleInputsChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  validLogin = async () => {
    return AllPropertiesFilled(this.state);
  }

  createAccount = async () => {
    const isValid = await this.validLogin();
    if (isValid) {
      this.props.sendContact(this.state);
    } else {
      window.alert('É necessário preencher todos os campos');
    }
  }

  render() {
    const { isFetching, inserted, errorMessage } = this.props;

    return (
      <MainLayout removeHeader>
        <FormLayout>
          <h3>Crie sua conta</h3>
          <form>
            <Input name="email" type="email" label="Email" handleInput={this.handleInputsChange} />
            <InputPassword name="password" label="Senha" handleInput={this.handleInputsChange} />
            <Input name="confirm_password" type="password" label="Confirmar sua senha" handleInput={this.handleInputsChange} />
          </form>
          {!isFetching &&
            <span className="error">{errorMessage}</span>
          }
          {!isFetching && inserted &&
            <span className="sucess">Conta criada com sucesso</span>
          }
          {isFetching ?
            <h4>Enviando...</h4> :
            <Button click={this.createAccount} label="Criar Conta" />
          }
        </FormLayout>
        <style jsx>{styles}</style>
      </MainLayout>
    )
  }
}
