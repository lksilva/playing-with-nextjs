import React, { Component } from 'react'
import MainLayout from '../src/components/MainLayout'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import * as DashboardActions from '../src/actions/dashboard'
import * as LoginActions from '../src/actions/login'
import PropTypes from 'prop-types'
import { KEY_STORE_TOKEN } from '../src/constants/Types' 

class Dashboard extends Component {

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
        <div>Eu sou o DashBoard</div>
      </MainLayout>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.dashboard.isFetching,
})

const mapDispatchToProps = dispatch => (bindActionCreators(Object.assign({}, DashboardActions, LoginActions), dispatch))

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Dashboard)
