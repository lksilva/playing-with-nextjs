import { STORE_USER, IS_LOADING } from '../constants/Types'

const initialState = { user: {}, isLoading: false }

export default function login(state = initialState, action) {
  switch (action.type) {
    case STORE_USER:
      return Object.assign({}, state, {
        user: action.userAuth
      });

    case IS_LOADING:
    return Object.assign({}, state, {
      isLoading: action.loading
    })

    default:
      return state
  }
}
