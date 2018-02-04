import React, { Component } from 'react'
import MainLayout from '../src/components/MainLayout'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import * as NeworderActions from '../src/actions/neworder'
import * as LoginActions from '../src/actions/login'
import PropTypes from 'prop-types'
import NewOrderForm from '../src/components/Form/NewOrderForm'
import { KEY_STORE_TOKEN } from '../src/constants/Types'

class NewOrder extends Component {

  static getInitialProps = (context) => {
    const { store, isServer, query, req, res } = context;
    if (isServer) {
      if(!req.cookies[KEY_STORE_TOKEN]) {
        res.redirect('/');
        console.log('Usuário não está logado');
      }
    }
  }

  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
  }

  render() {
    return (
      <MainLayout logoutUser={this.props.logoutUser}>
        <NewOrderForm saveOrder={this.props.saveOrder} companies={this.props.companies} isFetching={this.props.isFetching} errorMessage={this.props.errorMessage} />
      </MainLayout>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.neworder.isFetching,
  errorMessage: state.neworder.message,
  orders: state.neworder.companies,
  companies: state.company.companies
})

const mapDispatchToProps = dispatch => (bindActionCreators(Object.assign({}, NeworderActions, LoginActions), dispatch))

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(NewOrder)
