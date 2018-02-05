import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import AccountForm from '../src/components/Form/AccountForm'
import * as AccountActions from '../src/actions/account'
import { logoutUser } from '../src/actions/login' 

const mapStateToProps = state => ({
  isFetching: state.account.isFetching,
  errorMessage: state.account.message,
  inserted: state.account.inserted,
})

const mapDispatchToProps = dispatch => ( bindActionCreators(Object.assign({}, AccountActions, logoutUser), dispatch) )

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AccountForm)
