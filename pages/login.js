import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import LoginForm from '../src/components/Form/LoginForm'
import * as LoginActions from '../src/actions/login'

const mapStateToProps = state => ({
  isFetching: state.login.isFetching,
  isAuthenticated: state.login.isAuthenticated,
  errorMessage: state.login.errorMessage,
  user: state.login.user
})

const mapDispatchToProps = dispatch => ( bindActionCreators(LoginActions, dispatch) )

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(LoginForm)
