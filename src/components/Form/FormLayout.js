import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'
import InputPassword from '../Input/InputPassword'
import styles from './form.scss'
import MainLayout from '../MainLayout'

export default class FormCointainer extends Component {
  static propTypes = {
    createAccount: PropTypes.func.isRequired,
    userValid: PropTypes.bool.isRequired
  }

  render() {
    const { userValid, isLoading, sendContact} = this.props;

    return (
      <MainLayout>
      <div className="containerApp">
        <div className="boxForm">
          <h3>Crie sua conta</h3>
          <form>
            <Input type="email" label="Email" />
            <InputPassword label="Senha" />
            <Input type="password" label="Confirmar sua senha" />
          </form>
            {isLoading ? 
              <h4>Enviando...</h4> :
              <Button click={sendContact} label="Criar Conta" />
              }
        </div>
        <style jsx>{styles}</style>
      </div>
      </MainLayout>
    )
  }
}
