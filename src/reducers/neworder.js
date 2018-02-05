import { ArrayPush } from '../utils/helpers'
import { NEW_ORDER_REQUEST, NEW_ORDER_SUCCESS, NEW_ORDER_FAILURE } from '../constants/Types'

const initialState = {
  isFetching: false,
  orders: [{ 
    company_name: 'DELVESYS',
    product_list: [{
      name: 'cerveja',
      amount: 15
    },{
      name: 'carvão',
      amount: 2
    },{
      name: 'carne',
      amount: 10
    }]
  }],
  message: ''
}

export default function neworder(state = initialState, action) {
  switch (action.type) {
    case NEW_ORDER_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });

    case NEW_ORDER_SUCCESS:
      return Object.assign({}, state, {
        orders: ArrayPush(state.orders, action.order),
        isFetching: action.isFetching,
      })

    case NEW_ORDER_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        message: action.message
      })

    default:
      return state
  }
}
