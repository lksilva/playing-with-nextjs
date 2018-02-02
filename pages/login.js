import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import LoginForm from '../src/components/Form/LoginForm'
import * as LoginActions from '../src/actions/login'

const mapStateToProps = state => ({
  user: state.login.user,
  isLoading: state.login.isLoading
})

const mapDispatchToProps = dispatch => ( bindActionCreators(LoginActions, dispatch) )

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(LoginForm)
