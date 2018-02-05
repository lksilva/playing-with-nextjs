import React, { Component } from 'react'
import MainLayout from '../src/components/MainLayout'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import * as LoginActions from '../src/actions/login'
import * as OdersActions from '../src/actions/neworder'
import PropTypes from 'prop-types'
import { KEY_STORE_TOKEN } from '../src/constants/Types' 
import Orders from '../src/components/Orders/Orders'

class OrdersList extends Component {

  static getInitialProps = (context) => {
    const { store, isServer, query, req, res } = context;
    if (isServer) {
      if(!req.cookies[KEY_STORE_TOKEN]) {
        res.redirect('/');
        console.log('Usuário não está logado');
      }
    }
    return query;
  }

  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
  }

  render() {
    return (
      <MainLayout logoutUser={this.props.logoutUser}>
        <Orders removeOrder={this.props.removeOrder} orders={this.props.orders} company={this.props.company} />
      </MainLayout>
    )
  }
}

const mapStateToProps = state => ({
  orders: state.neworder.orders
})

const mapDispatchToProps = dispatch => (bindActionCreators(Object.assign({}, OdersActions, LoginActions), dispatch))

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(OrdersList)
