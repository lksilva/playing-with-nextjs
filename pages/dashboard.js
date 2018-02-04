import React, { Component } from 'react'
import MainLayout from '../src/components/MainLayout'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import * as DashboardActions from '../src/actions/dashboard'
import * as LoginActions from '../src/actions/login'
import PropTypes from 'prop-types'

class Dashboard extends Component {

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
