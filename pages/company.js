import React, { Component } from 'react'
import MainLayout from '../src/components/MainLayout'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import * as CompanyActions from '../src/actions/company'
import * as LoginActions from '../src/actions/login'
import PropTypes from 'prop-types'
import CompanyForm from '../src/components/Form/CompanyForm'

class Company extends Component {

  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
  }

  render() {
    console.log(this.props);
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
