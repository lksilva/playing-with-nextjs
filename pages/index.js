import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import LoginForm from '../src/components/Form/LoginForm'
import * as LoginActions from '../src/actions/login'
import { Router } from '../routes'
import Cookies from 'js-cookie';
import { KEY_STORE_TOKEN } from '../src/constants/Types' 

class App extends Component {
  static getInitialProps = (context) => {
    const { store, isServer, query, req, res, cookie } = context;
    if (isServer) {
      if(!!req.cookies[KEY_STORE_TOKEN]) {
        console.log('COOKIE', req.cookies[KEY_STORE_TOKEN]);
        res.redirect('/dashboard');
      } else {
        console.log('Usuário não está logado');
      }
    }
  }

  render() {
    return (
      <div>
        <LoginForm authenticate={this.props.authenticate} isFetching={this.props.isFetching} isAuthenticated={this.props.isAuthenticated} errorMessage={this.props.errorMessage} user={this.props.user} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.login.isFetching,
  isAuthenticated: state.login.isAuthenticated,
  errorMessage: state.login.errorMessage,
  user: state.login.user,
})

const mapDispatchToProps = dispatch => (bindActionCreators(LoginActions, dispatch))

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(App)
