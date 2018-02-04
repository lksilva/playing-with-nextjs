import { ArrayPush } from '../utils/helpers'
import { COMPANY_REQUEST, COMPANY_SUCCESS, COMPANY_FAILURE } from '../constants/Types'

const initialState = {
  isFetching: false,
  companies: [{ fantasy_name: "DELVESYS", cnpj: '27.696.334/0001-06' }, { fantasy_name: "DELVESYS2", cnpj: '27.696.134/0001-06' }],
  message: ''
}

export default function company(state = initialState, action) {
  switch (action.type) {
    case COMPANY_SUCCESS:
      return Object.assign({}, state, {
        companies: ArrayPush(state.companies, action.company),
        isFetching: action.isFetching,
      });

    case COMPANY_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      })

    case COMPANY_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        message: action.message
      })

    default:
      return state
  }
}
