import { ArrayPush } from '../utils/helpers'
import { NEW_ACCOUNT_SUCCESS, NEW_ACCOUNT_REQUEST, NEW_ACCOUNT_FAILURE } from '../constants/Types'

const initialState = {
  isFetching: false,
  users: [{ email: 'admin', password: 'admin' }],
  message: '',
  inserted: false
  
}

export default function account(state = initialState, action) {
  switch (action.type) {
    case NEW_ACCOUNT_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });
    
    case NEW_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        users: ArrayPush(state.users, action.user),
        isFetching: action.isFetching,
        message: action.message,
        inserted: action.inserted
      });

      case NEW_ACCOUNT_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        message: action.message
      })

    default:
      return state
  }
}
