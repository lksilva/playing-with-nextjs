import React, { Component } from 'react'
import MainLayout from '../src/components/MainLayout'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import * as CompanyActions from '../src/actions/company'
import * as LoginActions from '../src/actions/login'
import PropTypes from 'prop-types'
import CompanyForm from '../src/components/Form/CompanyForm'
import { KEY_STORE_TOKEN } from '../src/constants/Types'

class Company extends Component {

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
        <CompanyForm saveCompany={this.props.saveCompany} isFetching={this.props.isFetching} errorMessage={this.props.errorMessage} />
      </MainLayout>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.company.isFetching,
  errorMessage: state.company.message,
  companies: state.company.companies
})

const mapDispatchToProps = dispatch => (bindActionCreators(Object.assign({}, CompanyActions, LoginActions), dispatch))

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Company)
