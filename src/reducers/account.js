import { ArrayPush } from '../utils/helpers'
import { CREATE_ACCOUNT, IS_LOADING } from '../constants/Types'

const initialState = {
  isLoading: false,
  users: [{ email: 'admin', password: 'admin' }]
}

export default function account(state = initialState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return Object.assign({}, state, {
        users: ArrayPush(state.users, action.user)
      });

    case IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.loading
      })

    default:
      return state
  }
}
