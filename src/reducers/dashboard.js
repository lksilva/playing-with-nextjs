import { COMPANIES_REQUEST, COMPANIES_SUCCESS } from '../constants/Types'

const initialState = { isFetching: false }

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case COMPANIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      })
    case COMPANIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      })
    default:
      return state
  }
}
