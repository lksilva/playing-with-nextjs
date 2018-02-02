import { CREATE_ACCOUNT, IS_LOADING } from '../constants/Types'

const initialState = { userValid: false, isLoading: false }

export default function account(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return Object.assign({}, state, {
        userValid: !state.userValid
      });

    case IS_LOADING:
    return Object.assign({}, state, {
      isLoading: action.loading
    })

    default:
      return state
  }
}
