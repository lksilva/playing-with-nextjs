import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Input from '../Input/Input'
import FormLayout from './FormLayout'
import MainLayout from '../MainLayout'
import Link from 'next/link'
import styles from './form.scss'

export default class LoginForm extends Component {
  static propTypes = {
    authenticate: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  state = {
    email: '',
    password: '',
  }

  handleInputsChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  sendLogin = () => {
    this.props.authenticate(this.state);
  }

  render() {
    const { user, isLoading } = this.props;

    return (
      <MainLayout removeHeader>
        <FormLayout>
          <h3>Efetuar Login</h3>
          <form className="width350">
            <Input name="email" type="email" label="Email" handleInput={this.handleInputsChange} />
            <Input name="password" type="password" label="Senha" handleInput={this.handleInputsChange} />
          </form>
          {isLoading ?
            <h4>Validando...</h4> :
            <div className="boxHandle width350">
            <Link href="/create-account">
              <a className="menuLink">Nova Conta</a>
            </Link>
              <Button click={this.sendLogin} label="Login" />
            </div>
          }
        </FormLayout>
        <style jsx>{styles}</style>
      </MainLayout>
    )
  }
}
