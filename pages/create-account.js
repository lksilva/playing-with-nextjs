import { bindActionCreators } from 'redux'
import { initStore } from '../src/index'
import withRedux from 'next-redux-wrapper'
import AccountForm from '../src/components/Form/AccountForm'
import * as AccountActions from '../src/actions/account'

const mapStateToProps = state => ({
  userValid: state.account.userValid,
  isLoading: state.account.isLoading
})

const mapDispatchToProps = dispatch => ( bindActionCreators(AccountActions, dispatch) )

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AccountForm)
